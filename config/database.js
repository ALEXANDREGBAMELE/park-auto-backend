const mysql = require('mysql');

// Configurer les paramètres de connexion à la base de données
const dbConfig = {
  host: 'localhost',          
  user: 'root',   
  password: '', 
  database: 'test',
  connectionLimit : 10
};

// Créer une connexion à la base de données
const dbConnection = mysql.createConnection(dbConfig);

// Connecter la base de données
dbConnection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données : ' + err.message);
  } else {
    console.log('Connexion à la base de données établie.');
  }
});

// Exporter la connexion pour qu'elle puisse être utilisée ailleurs dans l'application
module.exports = dbConnection;
// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('db_auto', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

// module.exports = sequelize;

