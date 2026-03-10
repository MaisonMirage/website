# CHANGELOG — Maison Mirage V2
## Mars 2026 — Audit & Optimisations complètes

---

## 🔴 CORRECTIONS CRITIQUES

### SEO
- **canonical** : Balise `<link rel="canonical">` ajoutée sur les 4 pages (index, partenaires, événements, produit-fraise)
- **sitemap.xml** : Créé avec les 4 URLs actuelles + template pour futures pages produit
- **robots.txt** : Créé avec référence au sitemap
- **Schema.org** : Ajout de données structurées `LocalBusiness` sur index.html (adresse Marseille, téléphone, email, horaires)
- **favicon** : Références ajoutées (favicon-32x32.png, favicon-16x16.png, apple-touch-icon.png) — ⚠️ **Les fichiers images doivent être créés et placés dans /img/**

### Conversion B2B  
- **Hero CTA inversés** : Le CTA principal est maintenant "Demander un devis" (→ partenaires.html), le secondaire "Découvrir la collection" (→ #boutique). Avant c'était l'inverse.
- **Hook business ajouté** : Sous-titre "Le dessert que vos clients filment avant de manger." sous le H1, avec animation GSAP intégrée
- **Prix indicatifs** : "À partir de 6,50€/pièce" affiché sur toutes les cartes produit (remplace "Voir la fiche technique")
- **KPI Bar remontée** : Les chiffres clés (200+/semaine, 6j/7, 0 chef) apparaissent maintenant JUSTE APRÈS le hero, avant le social proof (impact immédiat)

### Performance CSS
- **spacing-fix.css éliminé** : Toutes les valeurs de spacing correctes intégrées directement dans styles.css (atelier, philosophy, boutique, faq, parallax, cta-banner, footer)
- **Import supprimé** : `<link rel="stylesheet" href="spacing-fix.css" />` retiré de index.html
- **Bug CSS corrigé** : Double accolade `{ {` dans le media query marquee (ligne ~926)

---

## 🟠 AMÉLIORATIONS IMPORTANTES

### UX & Conversion
- **Témoignages enrichis** : Ajout de métriques concrètes ("+45% de contenu Instagram en 3 mois", "+30% de ticket moyen dessert", "rentable dès le premier mois")
- **Lead magnet amélioré** : Ajout du champ "Nom de votre établissement" pour qualifier les leads
- **Page produit** : Ajout d'un bouton WhatsApp contextuel pré-rempli ("je suis intéressé par La Fraise") en plus du CTA partenaires
- **Footer enrichi** : Liens Instagram et TikTok ajoutés avec icônes SVG + fix email Cloudflare (mailto direct)
- **Alt images SEO** : Les logos partenaires ont maintenant des alt descriptifs ("Logo Full Dessert — Partenaire Maison Mirage")

### Accessibilité
- **Tailles de texte** : Minimum augmenté de 0.55rem → 0.65-0.72rem sur tous les micro-éléments (eyebrows, labels, tags, nav)
- **Breadcrumb** : 0.55rem → 0.65rem
- **Section labels produit** : 0.55rem → 0.65rem  
- **Allergen tags** : 0.55rem → 0.65rem
- **Privacy note** : 0.5rem → 0.6rem

### Mobile
- **Thumbnails produit agrandis** : 80px → 96px sur mobile pour meilleure zone de touch

---

## 🟢 FICHIERS CRÉÉS

| Fichier | Description |
|---------|-------------|
| `robots.txt` | Autorise tous les crawlers + référence sitemap |
| `sitemap.xml` | 4 URLs indexées, extensible pour futures pages |
| `analytics.html` | Snippet GA4 prêt à intégrer (remplacer G-XXXXXXXXXX) |

---

## ⚠️ À FAIRE PAR LE CLIENT

1. **Créer les favicons** et les placer dans `/img/` :
   - `favicon-32x32.png` (32×32px)
   - `favicon-16x16.png` (16×16px)  
   - `apple-touch-icon.png` (180×180px)
   - Outil recommandé : [favicon.io](https://favicon.io/) ou [realfavicongenerator.net](https://realfavicongenerator.net/)

2. **Configurer Google Analytics 4** :
   - Créer un compte GA4 sur [analytics.google.com](https://analytics.google.com)
   - Récupérer l'ID de mesure (G-XXXXXXXXXX)
   - Insérer le contenu de `analytics.html` dans le `<head>` de chaque page
   - Configurer les événements de conversion dans GA4

3. **Valider les prix indicatifs** : Les prix "À partir de X€/pièce" sont des estimations. Ajuster selon votre grille tarifaire réelle.

4. **Supprimer spacing-fix.css** du serveur (plus nécessaire, intégré dans styles.css)

5. **Extraire le CSS inline** de index.html vers un fichier `homepage.css` dédié (~470 lignes, Phase 2 de la roadmap)

---

## FICHIERS MODIFIÉS

- `index.html` — 12 modifications
- `styles.css` — 10 modifications  
- `produit-fraise.html` — 3 modifications
- `produit.css` — 4 modifications
- `partenaires.html` — 1 modification
- `evenements.html` — 1 modification
