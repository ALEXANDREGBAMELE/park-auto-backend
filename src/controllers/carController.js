// Importer le modèle de données Car (assurez-vous que le modèle existe)
const CarModel = require('../models/carModel');

// Fonction pour créer un nouvel utilisateur (Create)
exports.createCar = async (req, res) => {
  try {
    const newCar = await CarModel.create(req.body);
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de vehicule' });
  }
};

// Fonction pour récupérer la liste de tous les utilisateurs (Read)
exports.getAllCars = async (req, res) => {
  try {
    const cars = await CarModel.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des vehicules' });
  }
};

// Fonction pour récupérer un utilisateur par ID (Read)
exports.getCarById = async (req, res) => {
  const carId = req.params.CarId;
  try {
    const car = await CarModel.findById(CarId);
    if (!car) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
  }
};

// Fonction pour mettre à jour un utilisateur par ID (Update)
exports.updateCar = async (req, res) => {
  const carId = req.params.carId;
  try {
    const updatedCar = await CarModel.findByIdAndUpdate(carId, req.body, { new: true });
    if (!updatedCar) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    res.status(200).json(updatedCar);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'utilisateur' });
  }
};

// Fonction pour supprimer un utilisateur par ID (Delete)
exports.deleteCar = async (req, res) => {
  const carId = req.params.carId;
  try {
    const deletedCar = await CarModel.findByIdAndRemove(CarId);
    if (!deletedCar) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }
    res.status(204).end(); // Réponse sans contenu (No Content)
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur' });
  }
};
