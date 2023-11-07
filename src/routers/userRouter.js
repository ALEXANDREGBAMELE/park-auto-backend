const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Importer le contrôleur des utilisateurs

// Route pour créer un nouvel utilisateur (Create)
router.post('/', (req, res) => {
  userController.createUser(req, res);
  
});

// Route pour récupérer la liste de tous les utilisateurs (Read)
router.get('/', (req, res) => {
  userController.getAllUsers(req, res);
});

// Route pour récupérer un utilisateur par ID (Read)
router.get('/:userId', (req, res) => {
  userController.getUserById(req, res);
});

// Route pour mettre à jour un utilisateur par ID (Update)
router.put('/:userId', (req, res) => {
  userController.updateUser(req, res);
});

// Route pour supprimer un utilisateur par ID (Delete)
router.delete('/:userId', (req, res) => {
  userController.deleteUser(req, res);
});

module.exports = router;
