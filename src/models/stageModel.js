const mysql = require('mysql2');
// Fonctions pour interagir avec la base de données
const stageModel = {
  // Fonction pour créer un nouvel utilisateur
  createstage: (stageData, callback) => {
    const query = 'INSERT INTO stages (stagenumber) VALUES (?)';
    dbConnection.execute(query, [stageData.stagenumber], callback);
  },

  // Fonction pour récupérer la liste de tous les utilisateurs
  getAllstages: (callback) => {
    const query = 'SELECT * FROM stages';
    dbConnection.execute(query, callback);
  },

  // Fonction pour récupérer un utilisateur par ID
  getstageById: (stageId, callback) => {
    const query = 'SELECT * FROM stages WHERE id = ?';
    dbConnection.execute(query, [stageId], callback);
  },

  // Fonction pour mettre à jour un utilisateur par ID
  updatestage: (stageId, stageData, callback) => {
    const query = 'UPDATE stages SET stagenumber = ?,  = ?,  = ? WHERE id = ?';
    dbConnection.execute(query, [stageData.stagenumber, stageId], callback);
  },

  // Fonction pour supprimer un utilisateur par ID
  deletestage: (stageId, callback) => {
    const query = 'DELETE FROM stages WHERE id = ?';
    dbConnection.execute(query, [stageId], callback);
  },
};

module.exports = StageModel;
