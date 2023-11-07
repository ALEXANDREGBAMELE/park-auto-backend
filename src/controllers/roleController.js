const UserModel = require('../models/roleModel');

// Fonction pour créer un nouvel utilisateur
const createUser = (req, res) => {
  const userData = req.body;

  UserModel.createUser(userData, (err, result) => {
    if (err) {
      console.error('Erreur lors de la création de l\'utilisateur :', err);
      return res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur' });
    }

    res.status(201).json({ message: 'Utilisateur créé avec succès', userId: result.insertId });
  });
};

// Fonction pour récupérer la liste de tous les utilisateurs
const getAllUsers = (req, res) => {
  UserModel.getAllUsers((err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des utilisateurs :', err);
      return res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }

    res.status(200).json({ users: results });
  });
};

// Fonction pour récupérer un utilisateur par ID
const getUserById = (req, res) => {
  const userId = req.params.userId;

  UserModel.getUserById(userId, (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de l\'utilisateur :', err);
      return res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur' });
    }

    if (!result || result.length === 0) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    res.status(200).json({ user: result[0] });
  });
};

// Fonction pour mettre à jour un utilisateur par ID
const updateUser = (req, res) => {
  const userId = req.params.userId;
  const userData = req.body;

  UserModel.updateUser(userId, userData, (err) => {
    if (err) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur :', err);
      return res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur' });
    }

    res.status(200).json({ message: 'Utilisateur mis à jour avec succès' });
  });
};

// Fonction pour supprimer un utilisateur par ID
const deleteUser = (req, res) => {
  const userId = req.params.userId;

  UserModel.deleteUser(userId, (err) => {
    if (err) {
      console.error('Erreur lors de la suppression de l\'utilisateur :', err);
      return res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur' });
    }

    res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
  });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
