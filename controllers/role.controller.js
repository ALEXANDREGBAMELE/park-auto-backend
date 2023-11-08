const models = require('../models')

function show(req, res) {
    const id = req.params.id;

    models.Role.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la recuperation de role"
        })
    })
}

function index(req, res) {
    models.Role.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la recuperation des roles"
        })
    })
}

module.exports = {
    show: show,
    index: index,  
}