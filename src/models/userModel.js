const mysql = require('mysql2');
// Fonctions pour interagir avec la base de données
const UserModel = {
  // Fonction pour créer un nouvel utilisateur
  createUser: (userData, callback) => {
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    dbConnection.execute(query, [userData.username, userData.email, userData.password], callback);
  },

  // Fonction pour récupérer la liste de tous les utilisateurs
  getAllUsers: (callback) => {
    const query = 'SELECT * FROM users';
    dbConnection.execute(query, callback);
  },

  // Fonction pour récupérer un utilisateur par ID
  getUserById: (userId, callback) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    dbConnection.execute(query, [userId], callback);
  },

  // Fonction pour mettre à jour un utilisateur par ID
  updateUser: (userId, userData, callback) => {
    const query = 'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?';
    dbConnection.execute(query, [userData.username, userData.email, userData.password, userId], callback);
  },

  // Fonction pour supprimer un utilisateur par ID
  deleteUser: (userId, callback) => {
    const query = 'DELETE FROM users WHERE id = ?';
    dbConnection.execute(query, [userId], callback);
  },
};

module.exports = UserModel;
