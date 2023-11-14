const models = require('../models')

function save(req, res) {
    const station = {
        carId: req.body.carId,
        userId: req.body.userId,
        spaceId: req.body.spaceId,
        reservationId: req.body.reservationId,
        arrived: req.body.arrived,
        leave: req.body.leave
    }

    models.station.create(station).then(result => {
        res.status(200).json({
            message: "creation avec succes !",
            space: result
        })
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la creation de reservation",
            error: error
        })
    })
}

function update(req, res) {
    const id = req.params.id;
    const updateStation = {
        carId: req.body.carId,
        userId: req.body.userId,
        spaceId: req.body.spaceId,
        reservationId: req.body.reservationId,
        arrived: req.body.arrived,
        leave: req.body.leave
    }

    models.station.update(updateStation, { where: { id: id } }).then(result => {
        res.status(200).json({
            message: "reservation mise a jours avec succes"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la mise à jours de reservation"
        })
    })
}

function show(req, res) {
    const id = req.params.id;

    models.station.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la recuperation de reservation"
        })
    })
}

function index(req, res) {
    models.station.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la recuperation des reservation"
        })
    })
}

const destroy = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await models.station.destroy({
            where: { id: id }
        });

        if (result === 1) {
            res.status(200).json({
                message: "Station supprimée avec succès"
            });
        } else {
            res.status(404).json({
                message: "Réservation non trouvée"
            });
        }
    } catch (error) {
        console.error("Une erreur est survenue lors de la suppression de la réservation", error);
        res.status(500).json({
            message: "Une erreur est survenue lors de la suppression de la réservation"
        });
    }
};


module.exports = {
    show: show,
    index: index,
    save: save,
    update: update,
    destroy: destroy,

}