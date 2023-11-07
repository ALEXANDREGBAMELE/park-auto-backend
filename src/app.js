// Importer les dépendances nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConnection = require('../config/database'); // Importer la connexion à la base de données

// // Créer une instance d'Express.js
const app = express();

// // Middleware
app.use(cors()); // Activer CORS pour permettre les requêtes depuis différents domaines
app.use(bodyParser.json()); // Parser les données JSON dans les requêtes

// // Importer les routes
const userRouter = require('./routers/userRouter'); 
const roleRouter = require('./routers/roleRouter'); 
const carRouter = require('./routers/carRouter');
const parkingRouter = require('./routers/parkingRouter');
// const roleRoutes = require('./routers/roleRouter'); // Importer les routes des rôles

// Utiliser les routes
app.use('/users', userRouter);
app.use('/roles', roleRouter);
app.use('/cars', carRouter);
app.use('/parkings', parkingRouter);
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
