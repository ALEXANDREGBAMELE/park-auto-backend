const mysql = require('mysql2');
// Fonctions pour interagir avec la base de données
const ParkingModel = {
  // Fonction pour créer un nouvel utilisateur
  createparking: (parkingData, callback) => {
    const query = 'INSERT INTO parkings (parkingname, capacity, area) VALUES (?, ?, ?)';
    dbConnection.execute(query, [parkingData.parkingname, parkingData.capacity, parkingData.area], callback);
  },

  // Fonction pour récupérer la liste de tous les utilisateurs
  getAllparkings: (callback) => {
    const query = 'SELECT * FROM parkings';
    dbConnection.execute(query, callback);
  },

  // Fonction pour récupérer un utilisateur par ID
  getparkingById: (parkingId, callback) => {
    const query = 'SELECT * FROM parkings WHERE id = ?';
    dbConnection.execute(query, [parkingId], callback);
  },

  // Fonction pour mettre à jour un utilisateur par ID
  updateparking: (parkingId, parkingData, callback) => {
    const query = 'UPDATE parkings SET parkingname = ?, capacity = ?, area = ? WHERE id = ?';
    dbConnection.execute(query, [parkingData.parkingname, parkingData.capacity, parkingData.area, parkingId], callback);
  },

  // Fonction pour supprimer un utilisateur par ID
  deleteparking: (parkingId, callback) => {
    const query = 'DELETE FROM parkings WHERE id = ?';
    dbConnection.execute(query, [parkingId], callback);
  },
};

module.exports = ParkingModel;
