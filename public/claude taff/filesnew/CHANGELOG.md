# CHANGELOG — Maison Mirage V3 (Final)
## Mars 2026 — Toutes les optimisations appliquées

---

## RÉSUMÉ DES FICHIERS

| Fichier | Statut | Description |
|---------|--------|-------------|
| `index.html` | Modifié | ~460 lignes de CSS inline extraites, GA4, hero remanié, KPI remontée, prix, chatbot amélioré |
| `homepage.css` | Créé | CSS extrait de index.html — cacheable, maintenable |
| `styles.css` | Modifié | Spacings intégrés, font-sizes corrigés, bug CSS fixé, chatbot pulse animation |
| `produit-fraise.html` | Modifié | GA4, canonical, favicon, WhatsApp contextuel |
| `produit.css` | Modifié | Font-sizes accessibles, thumbnails agrandis mobile |
| `partenaires.html` | Modifié | GA4, canonical, favicon, tracking conversion formulaire, email fixé |
| `evenements.html` | Modifié | GA4, canonical, favicon, tracking conversion formulaire, email fixé |
| `robots.txt` | Créé | SEO crawling |
| `sitemap.xml` | Créé | SEO indexation |
| `spacing-fix.css` | Supprimé | Intégré dans styles.css |

---

## DÉPLOIEMENT

1. Uploader tous les fichiers du dossier sur le serveur
2. Supprimer spacing-fix.css et analytics.html du serveur
3. Vérifier que homepage.css est bien chargé (DevTools > Network)
4. Dans GA4 > Admin > Events > marquer generate_lead et sign_up comme conversions
5. Tester les formulaires et vérifier que les events apparaissent dans GA4 Realtime
