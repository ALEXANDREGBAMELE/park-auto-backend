// Importer le modèle de données User (assurez-vous que le modèle existe)
const UserModel = require('../models/userModel');

// Fonction pour créer un nouvel utilisateur (Create)
exports.createUser = async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    // console.log("voici les erreurs" + error);
    res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
  }
};

// Fonction pour récupérer la liste de tous les utilisateurs (Read)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.log("voici les erreurs" + error);
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  }
};

// Fonction pour récupérer un utilisateur par ID (Read)
exports.getUserById = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
  }
};

// Fonction pour mettre à jour un utilisateur par ID (Update)
exports.updateUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(userId, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'utilisateur' });
  }
};

// Fonction pour supprimer un utilisateur par ID (Delete)
exports.deleteUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const deletedUser = await UserModel.findByIdAndRemove(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    res.status(204).end(); // Réponse sans contenu (No Content)
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur' });
  }
};
