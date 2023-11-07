const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController'); // Importer le contrôleur des utilisateurs

// Route pour créer un nouvel utilisateur (Create)
router.post('/', (req, res) => {
  carController.createCar(req, res);
  
});

// Route pour récupérer la liste de tous les utilisateurs (Read)
router.get('/', (req, res) => {
  carController.getAllCars(req, res);
});

// Route pour récupérer un utilisateur par ID (Read)
router.get('/:carId', (req, res) => {
  carController.getCarById(req, res);
});

// Route pour mettre à jour un utilisateur par ID (Update)
router.put('/:carId', (req, res) => {
  carController.updateCar(req, res);
});

// Route pour supprimer un utilisateur par ID (Delete)
router.delete('/:carId', (req, res) => {
  carController.deleteCar(req, res);
});

module.exports = router;
