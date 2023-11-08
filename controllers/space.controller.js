
const models = require('../models')

function save(req, res) {
    const space = {
        number: req.body.number,
        status: req.body.status,
        occupacyTime: req.body.occupacyTime,
        userId: req.body.userId,
        levelId: req.body.levelId
    }

    models.Space.create(space).then(result => {
        res.status(200).json({
            message: "creation avec succes !",
            space: result
        })
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la creation d'utilisateur",
            error: error
        })
    })
}

function show(req, res) {
    const id = req.params.id;

    models.Space.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la recuperation d'utilisateur"
        })
    })
}

function index(req, res) {
    models.Space.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la recuperation des utilisateurs"
        })
    })
}

function update(req, res) {
    const id = req.params.id;
    const updateSpace = {
        number: req.body.number,
        status: req.body.status,
        occupacyTime: req.body.occupacyTime,
        userId: req.body.userId,
        levelId: req.body.levelId
    }

    models.Space.update(updateSpace, { where: { id: id } }).then(result => {
        res.status(200).json({
            message: "Utilisateur mise a jours avec succes"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la mise à jours de l'utilisateurs"
        })
    })
}

function destory(req, res) {
    const id = req.params.id;

    models.Space.destory({ where: { id: id } }).then(result => {
        res.status(200).json({
            message: "Utilisateur suprimé avec succes"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la supression de l'utilisateurs"
        })
    })
}

module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
    destory: destory
}