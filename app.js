// Importer les dépendances nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const dbConnection = require('../config/database'); // Importer la connexion à la base de données

// // Créer une instance d'Express.js
const app = express();

// // Middleware
app.use(cors()); // Activer CORS pour permettre les requêtes depuis différents domaines
app.use(bodyParser.json()); // Parser les données JSON dans les requêtes

app.get('/', function(req, res) {
  console.log(req.body);
  res.send('Hello World');
});


// Importer les routes
const userRoute = require('./routes/user.route');
const roleRoute = require('./routes/role.route'); 
const parkingRoute = require('./routes/parking.route');
const levelRoute = require('./routes/level.route');
const spaceRoute = require('./routes/space.route'); 

// Utiliser les routes
app.use('/users', userRoute);
app.use('/roles', roleRoute);
app.use('/parkings', parkingRoute);
app.use('/levels', levelRoute);
app.use('/spaces', spaceRoute);
// // Gestion des erreurs
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

// Exporter l'application pour pouvoir la démarrer dans un autre fichier
module.exports = app;
