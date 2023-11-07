// Importer le modèle de données parking (assurez-vous que le modèle existe)
const ParkingModel = require('../models/ParkingModel');

// Fonction pour créer un nouvel utilisateur (Create)
exports.createparking = async (req, res) => {
  try {
    const newparking = await ParkingModel.create(req.body);
    res.status(201).json(newparking);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du parking' });
  }
};

// Fonction pour récupérer la liste de tous les utilisateurs (Read)
exports.getAllParkings = async (req, res) => {
  try {
    const parkings = await ParkingModel.find();
    res.status(200).json(parkings);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des parkings' });
  }
};

// Fonction pour récupérer un utilisateur par ID (Read)
exports.getParkingById = async (req, res) => {
  const parkingId = req.params.parkingId;
  try {
    const parking = await ParkingModel.findById(parkingId);
    if (!parking) {
      return res.status(404).json({ error: 'parking non trouvé' });
    }
    res.status(200).json(parking);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du parking' });
  }
};

// Fonction pour mettre à jour un utilisateur par ID (Update)
exports.updateParking = async (req, res) => {
  const parkingId = req.params.parkingId;
  try {
    const updatedParking = await ParkingModel.findByIdAndUpdate(parkingId, req.body, { new: true });
    if (!updatedParking) {
      return res.status(404).json({ error: 'parking non trouvé' });
    }
    res.status(200).json(updatePparking);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de parking' });
  }
};

// Fonction pour supprimer un utilisateur par ID (Delete)
exports.deleteParking = async (req, res) => {
  const parkingId = req.params.parkingId;
  try {
    const deletedParking = await ParkingModel.findByIdAndRemove(parkingId);
    if (!deletedParking) {
      return res.status(404).json({ error: 'parking non trouvé' });
    }
    res.status(204).end(); // Réponse sans contenu (No Content)
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de parking' });
  }
};
