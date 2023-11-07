const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

// Route pour créer un nouveau rôle (Create)
router.post('/', (req, res) => {
  // Logique pour créer un nouveau rôle
  // Par exemple :
  roleController.createRole(req, res);
});

// Route pour récupérer la liste de tous les rôles (Read)
router.get('/', (req, res) => {
  roleController.getAllRoles(req, res);
});

// Route pour récupérer un rôle par ID (Read)
router.get('/:roleId', (req, res) => {
  roleController.getRoleById(req, res);
  console.log("hello yes man")
});

// Route pour mettre à jour un rôle par ID (Update)
router.put('/:roleId', (req, res) => {
  
  roleController.updateRole(req, res);
});

// Route pour supprimer un rôle par ID (Delete)
router.delete('/:roleId', (req, res) => {
  // Logique pour supprimer un rôle par ID
  // Par exemple :
  roleController.deleteRole(req, res);
});

module.exports = router;
