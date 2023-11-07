const express = require('express');
const router = express.Router();
const parkingController = require('../controllers/parkingController'); // Importer le contrôleur des utilisateurs

// Route pour créer un nouvel utilisateur (Create)
router.post('/', (req, res) => {
  parkingController.createParking(req, res);
  
});

// Route pour récupérer la liste de tous les utilisateurs (Read)
router.get('/', (req, res) => {
  parkingController.getAllParkings(req, res);
});

// Route pour récupérer un utilisateur par ID (Read)
router.get('/:parkingId', (req, res) => {
  parkingController.getParkingById(req, res);
});

// Route pour mettre à jour un utilisateur par ID (Update)
router.put('/:parkingId', (req, res) => {
  parkingController.updateParking(req, res);
});

// Route pour supprimer un utilisateur par ID (Delete)
router.delete('/:parkingId', (req, res) => {
  parkingController.deleteParking(req, res);
});

module.exports = router;
