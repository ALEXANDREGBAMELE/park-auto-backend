
const models = require('../models')

function save(req, res) {
    const parking = {
        name: req.body.name,
        capacity: req.body.capacity,
        address: req.body.address,
    }

    models.Parking.create(parking).then(result => {
        res.status(200).json({
            message: "creation avec succes !",
            parking: result
        })
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la creation de parking",
            error: error
        })
    })
}

function show(req, res) {
    const id = req.params.id;

    models.Parking.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la recuperation de parking"
        })
    })
}

function index(req, res) {
    models.Parking.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la recuperation des parking"
        })
    })
}

function update(req, res) {
    const id = req.params.id;
    const updateUser = {
        name: req.body.name,
        capacity: req.body.capacity,
        address: req.body.address,
    }

    models.Parking.update(updateUser, { where: { id: id } }).then(result => {
        res.status(200).json({
            message: "parking mise a jours avec succes"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la mise à jours de parkings"
        })
    })
}

function destory(req, res){
    const id = req.params.id;

    models.Parking.destory({ where: { id: id } }).then(result => {
        res.status(200).json({
            message: "parking suprimé avec succes"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la supression de parkings"
        })
    })
}

module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
    destory : destory
}