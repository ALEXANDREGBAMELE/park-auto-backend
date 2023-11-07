const mysql = require('mysql2');
const dbConnection = require('../../config/database'); // Importez votre fichier de configuration de la base de données

const RoleModel = {
  // Fonction pour créer un nouveau rôle
  createRole: (roleData, callback) => {
    const query = 'INSERT INTO roles (role_name) VALUES (?)';
    dbConnection.execute(query, [roleData.role_name], callback);
  },

  // Fonction pour récupérer la liste de tous les rôles
  getAllRoles: (callback) => {
    const query = 'SELECT * FROM roles';
    dbConnection.execute(query, callback);
  },

  // Fonction pour récupérer un rôle par ID
  getRoleById: (roleId, callback) => {
    const query = 'SELECT * FROM roles WHERE id = ?';
    dbConnection.execute(query, [roleId], callback);
  },

  // Fonction pour mettre à jour un rôle par ID
  updateRole: (roleId, roleData, callback) => {
    const query = 'UPDATE roles SET role_name = ? WHERE id = ?';
    dbConnection.execute(query, [roleData.role_name, roleId], callback);
  },

  // Fonction pour supprimer un rôle par ID
  deleteRole: (roleId, callback) => {
    const query = 'DELETE FROM roles WHERE id = ?';
    dbConnection.execute(query, [roleId], callback);
  },
};

module.exports = RoleModel;
