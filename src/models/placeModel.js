const mysql = require('mysql2');
// Fonctions pour interagir avec la base de données
const placeModel = {
  // Fonction pour créer un nouvel utilisateur
  createUser: (placesData, callback) => {
    const query = 'INSERT INTO places (numero, etage, parking) VALUES (?, ?, ?)';
    dbConnection.execute(query, [placeData.numero, placeData.etage, placeData.parking], callback);
  },

  // Fonction pour récupérer la liste de tous les utilisateurs
  getAllplaces: (callback) => {
    const query = 'SELECT * FROM places';
    dbConnection.execute(query, callback);
  },

  // Fonction pour récupérer un utilisateur par ID
  getUserById: (placeId, callback) => {
    const query = 'SELECT * FROM places WHERE id = ?';
    dbConnection.execute(query, [placesId], callback);
  },

  // Fonction pour mettre à jour un utilisateur par ID
  updateUser: (placesId, placesData, callback) => {
    const query = 'UPDATE places SET numero = ?, etage = ?, parking = ? WHERE id = ?';
    dbConnection.execute(query, [placeData.username, placeData.email, placeData.parking, placeId], callback);
  },

  // Fonction pour supprimer un utilisateur par ID
  deleteUser: (placeId, callback) => {
    const query = 'DELETE FROM places WHERE id = ?';
    dbConnection.execute(query, [placeId], callback);
  },
};

module.exports = PlaceModel;
