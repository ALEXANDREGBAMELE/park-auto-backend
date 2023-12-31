
const models = require('../models')

function save(req, res) {
    const parking = {
        name: req.body.name,
        address: req.body.address,
        capacity: req.body.capacity,
        spaceAvailable: req.body.spaceAvailable,
        hourlyRate: req.body.hourlyRate,
        closureHour: req.body.closureHour,
        openingHour: req.body.openingHour,
        status: req.body.status,
        gpsCoordinates: req.body.gpsCoordinates,
        comments: req.body.comments,
        imageUrl: req.body.imageUrl,

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
            message: "Une erreur est survenue lors de la recuperation des parkings"
        })
    })
}

function update(req, res) {
    const id = req.params.id;
    const updateUser = {
        name: req.body.name,
        address: req.body.address,
        capacity: req.body.capacity,
        spaceAvailable: req.body.spaceAvailable,
        hourlyRate: req.body.hourlyRate,
        closureHour: req.body.closureHour,
        openingHour: req.body.openingHour,
        status: req.body.status,
        gpsCoordinates: req.body.gpsCoordinates,
        comments: req.body.comments,
        imageUrl: req.body.imageUrl,
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

function destroy(req, res) {
    const id = req.params.id;

    models.Parking.destroy({ where: { id: id } }).then(result => {
        res.status(200).json({
            message: "parking suprimé avec succes"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la supression de parkings"
        })
    })
}


async function tester(req, res) {
    // One to many
    const parking = await models.Parking.findByPk(3, {
        include: [models.Level]
    })

    res.status(200).json({
        data: parking
    })
};


module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
    destroy: destroy,
    tester: tester,
}