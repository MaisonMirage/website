# Maison Mirage — Déploiement

## Structure du projet

```
maison-mirage/
├── api/
│   └── create-checkout.js    ← Backend Stripe (fonction serverless Vercel)
├── public/
│   ├── index.html            ← Ton site principal
│   ├── confirmation.html     ← Page post-paiement
│   ├── maison_mirage_logo_beige.png  ← Ton logo (à copier ici)
│   ├── fraise.png            ← Tes images produits (à copier ici)
│   ├── mangue.png
│   ├── ...                   ← Toutes tes images
│   └── trio2.png
├── .env.example
├── package.json
├── vercel.json
└── README.md
```

## Déploiement sur Vercel (gratuit)

### 1. Prépare ton projet

Copie toutes tes images (fraise.png, mangue.png, citron.png, etc.)
dans le dossier `public/`.

### 2. Crée un repo GitHub

```bash
cd maison-mirage
git init
git add .
git commit -m "Maison Mirage v1"
```

Pousse sur GitHub (crée un repo sur github.com puis) :

```bash
git remote add origin https://github.com/TON-USERNAME/maison-mirage.git
git branch -M main
git push -u origin main
```

### 3. Déploie sur Vercel

1. Va sur https://vercel.com et connecte-toi avec GitHub
2. Clique "Add New Project" → Importe ton repo `maison-mirage`
3. Dans les **Environment Variables**, ajoute :
   - `STRIPE_SECRET_KEY` = ta clé secrète Stripe (sk_live_... ou sk_test_...)
4. Clique "Deploy"

C'est tout. Ton site sera en ligne avec le paiement Stripe fonctionnel.

### 4. Configure Stripe

Dans ton dashboard Stripe (https://dashboard.stripe.com) :

- Va dans **Settings → Branding** : ajoute ton logo, tes couleurs
- Va dans **Settings → Customer emails** : active les emails de confirmation
- Pour tester : utilise ta clé `sk_test_...` d'abord
- Pour la prod : remplace par `sk_live_...` dans Vercel (Settings → Environment Variables)

### Carte de test Stripe

Pour tester le paiement sans dépenser :
- Numéro : `4242 4242 4242 4242`
- Date : n'importe quelle date future
- CVC : n'importe quels 3 chiffres

## Développement local

```bash
npm install
# Crée un fichier .env avec ta STRIPE_SECRET_KEY
cp .env.example .env
# Édite .env avec ta vraie clé

# Lance le serveur de dev Vercel
npx vercel dev
```

Le site sera accessible sur http://localhost:3000

## Domaine personnalisé

Une fois déployé sur Vercel, tu peux connecter ton domaine
(ex: maison-mirage.fr) dans Vercel → Settings → Domains.
