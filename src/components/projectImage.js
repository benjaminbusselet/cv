// Charge les images de projets par leur nom de fichier, référencé
// depuis resumeData.js, plutôt que d'importer chaque image une à une.
const projectImages = import.meta.glob("../assets/*.png", {
  eager: true,
  import: "default",
});

export const imageFor = (filename) => filename && projectImages[`../assets/${filename}`];
