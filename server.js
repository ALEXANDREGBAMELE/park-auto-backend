const app = require('./src/app'); // Importer l'application Express configurée

const PORT = process.env.PORT || 3000; // Définir le port du serveur (utilisez le port par défaut 3000 si la variable d'environnement PORT n'est pas définie)

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
