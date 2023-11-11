
const models = require('../models')

function save(req, res) {
    const level = {
        name: req.body.name,
        capacity: req.body.capacity,
        spaceFree: req.body.spaceFree,
        spaceOccupacy: req.body.spaceOccupacy,
        parkingId: req.body.parkingId

    }

    models.Parking.findByPk(req.body.parkingId).then(result => {
        if (result !== null) {
            models.Level.create(level).then(result => {
                res.status(200).json({
                    message: "creation avec succes !",
                    level: result
                })
            }).catch(error => {
                res.status(500).json({
                    message: "Une erreur est survenue lors de la creation de etage",
                    error: error
                })
            })
        }else{
            res.status(400).json({
                message: "Parking invalide",
                error: error
            })
        }
    })


}

function show(req, res) {
    const id = req.params.id;

    models.Level.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la recuperation de Level"
        })
    })
}

function index(req, res) {
    models.Level.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la recuperation des Level"
        })
    })
}

function update(req, res) {
    const id = req.params.id;
    const updateLevel = {
        name: req.body.name,
        capacity: req.body.capacity,
        spaceFree: req.body.spaceFree,
        spaceOccupacy: req.body.spaceOccupacy,
        parkingId: req.body.parkingId
    }

    models.Level.update(updateLevel, { where: { id: id } }).then(result => {
        res.status(200).json({
            message: "Level mise a jours avec succes"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la mise à jours de parkings"
        })
    })
}

function destroy(req, res) {
    const id = req.params.id;

    models.Level.destroy({ where: { id: id } }).then(result => {
        res.status(200).json({
            message: "Level suprimé avec succes"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la supression de level"
        })
    })
}

module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
    destroy: destroy
}