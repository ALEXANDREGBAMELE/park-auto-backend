const models = require('../models')

function save(req, res) {
    const reservation = {
        carId: req.body.carId,
        spaceId: req.body.spaceId,
        date: req.body.date,
        price: req.body.price,
        parkingId: req.body.parkingId
    }

    models.Reservation.create(reservation).then(result => {
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

    models.Reservation.update(updateReservation, { where: { id: id } }).then(result => {
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

    models.Reservation.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la recuperation de reservation"
        })
    })
}

function index(req, res) {
    models.Reservation.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la recuperation des reservation"
        })
    })
}

const destroy = (req, res) => {
    const reservationId = req.params.roleId;

    models.Role.destroy({
        where: { reservationId: reservationId }
    }).then(result => {
        res.status(200).json({
            message: "Rôle supprimé avec succès"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la suppression du rôle"
        });
    });
};

module.exports = {
    show: show,
    index: index,
    save: save,
    update: update,
    destroy: destroy,

}