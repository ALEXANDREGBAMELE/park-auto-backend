const mysql = require('mysql2');
// Fonctions pour interagir avec la base de données
const CarModel = {
  // Fonction pour créer un nouvel utilisateur
  createcar: (carData, callback) => {
    const query = 'INSERT INTO cars (matricule, owner, color,carName) VALUES (?, ?, ?, ?)';
    dbConnection.execute(query, [carData.matricule, carData.owner, carData.color, carData.carName], callback);
  },

  // Fonction pour récupérer la liste de tous les utilisateurs
  getAllcars: (callback) => {
    const query = 'SELECT * FROM cars';
    dbConnection.execute(query, callback);
  },

  // Fonction pour récupérer un utilisateur par ID
  getcarById: (carId, callback) => {
    const query = 'SELECT * FROM cars WHERE id = ?';
    dbConnection.execute(query, [carId], callback);
  },

  // Fonction pour mettre à jour un utilisateur par ID
  updatecar: (carId, carData, callback) => {
    const query = 'UPDATE cars SET matricule = ?, owner = ?, color = ?, carName = ? WHERE id = ?';
    dbConnection.execute(query, [carData.matricule, carData.owner, carData.color,carData.carName, carId], callback);
  },

  // Fonction pour supprimer un utilisateur par ID
  deletecar: (carId, callback) => {
    const query = 'DELETE FROM cars WHERE id = ?';
    dbConnection.execute(query, [carId], callback);
  },
};

module.exports = CarModel;
