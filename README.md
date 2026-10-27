# CV en ligne - Benjamin Busselet

Site CV de Benjamin Busselet, développeur web front-end / full-stack : https://benjaminbusselet.github.io/cv/

## Contenu

- Page d'accueil en sections : présentation, compétences, projets, parcours, contact
- Études de cas par projet (`/projet/:slug`) et page `/cv` avec le PDF intégré
- Français / anglais, thème clair / sombre

## Stack

React, React Router, Vite, Framer Motion, CSS.

## Développement

```bash
npm install
npm start        # serveur de développement
npm run build    # build dans dist/
npm run deploy   # publie dist/ sur la branche gh-pages (GitHub Pages)
```

## Contenu du CV

Toutes les données (profil, compétences, expériences, formations, projets) sont dans `src/data/resumeData.js`, en français et en anglais.

Le PDF `src/assets/files/cv.pdf` est généré à partir de ces mêmes données :

```bash
npm run cv:pdf   # nécessite Google Chrome (variable CHROME pour un autre chemin)
```

## Archive

L'ancienne version du site est conservée dans la branche `archive/v1` et le tag `v1-archive`.

## Licence

Ce projet est sous licence MIT.
