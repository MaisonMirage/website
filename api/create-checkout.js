// api/create-checkout.js
// Vercel Serverless Function — creates a Stripe Checkout session from the cart

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { items, origin } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Le panier est vide.' });
    }

    // Build Stripe line_items from cart
    const line_items = items.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          description: item.sub || 'Création Maison Mirage',
          // Optionnel : ajoute les images de tes produits hébergées
          // images: [`${origin}/${item.img}`],
        },
        unit_amount: Math.round(item.price * 100), // Stripe attend des centimes
      },
      quantity: item.qty,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      locale: 'fr',
      line_items,
      // Infos client
      billing_address_collection: 'required',
      phone_number_collection: { enabled: true },
      // Livraison / Retrait
      custom_fields: [
        {
          key: 'retrait',
          label: { type: 'custom', custom: 'Mode de retrait' },
          type: 'dropdown',
          dropdown: {
            options: [
              { label: 'Retrait à l\'atelier', value: 'atelier' },
              { label: 'Livraison coursier Marseille (+5€)', value: 'coursier' },
            ],
          },
        },
        {
          key: 'date_retrait',
          label: { type: 'custom', custom: 'Date souhaitée (ex: 15/03/2026)' },
          type: 'text',
        },
      ],
      // Redirection après paiement
      success_url: `${origin}/confirmation.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/#boutique`,
      // Métadonnées pour ton suivi
      metadata: {
        source: 'maison-mirage-website',
        items_summary: items.map(i => `${i.name} x${i.qty}`).join(', '),
      },
    });

    res.status(200).json({ url: session.url });

  } catch (err) {
    console.error('Stripe error:', err.message);
    res.status(500).json({ error: 'Erreur lors de la création du paiement. Veuillez réessayer.' });
  }
};
