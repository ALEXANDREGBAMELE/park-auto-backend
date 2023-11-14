const models = require('../models')

function save(req, res) {
    const reservation = {
        carId: req.body.carId,
        spaceId: req.body.spaceId,
        date: req.body.date,
        price: req.body.price,
        parkingId: req.body.parkingId
    }

    models.reservation.create(reservation).then(result => {
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
    const updateReservation = {
        carId: req.body.carId,
        spaceId: req.body.spaceId,
        date: req.body.date,
        price: req.body.price,
        parkingId: req.body.parkingId
    }

    models.reservation.update(updateReservation, { where: { id: id } }).then(result => {
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

    models.reservation.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la recuperation de reservation"
        })
    })
}

function index(req, res) {
    models.reservation.findAll().then(result => {
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

        const result = await models.reservation.destroy({
            where: { id: id }
        });

        if (result === 1) {
            res.status(200).json({
                message: "Réservation supprimée avec succès"
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

async function tester(req, res) {
    // One to many
    const reservation = await models.reservation.findByPk(3, {
        include: [models.Space]
    })

    res.status(200).json({
        data: reservation
    })
};


module.exports = {
    show: show,
    index: index,
    save: save,
    update: update,
    destroy: destroy,
    tester: tester

}