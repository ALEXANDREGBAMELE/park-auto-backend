
const models = require('../models')


function save(req, res) {
    const space = {
        number: req.body.number,
        status: req.body.status,
        occupacyTime: req.body.occupacyTime,
        userId: req.body.userId,
        levelId: req.body.levelId
    }

    models.Level.findByPk(req.body.levelId)
        .then(level => {
            if (level !== null) {
                models.Space.create(space)
                    .then(createdSpace => {
                        res.status(200).json({
                            message: "Création réussie !",
                            space: createdSpace
                        });
                    })
                    .catch(error => {
                        res.status(500).json({
                            message: "Une erreur est survenue lors de la création de l'espace",
                            error: error
                        });
                    });
            } else {
                res.status(400).json({
                    message: "Niveau de parking invalide",
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Une erreur est survenue lors de la recherche du niveau de parking",
                error: error
            });
        });
}






function show(req, res) {
    const id = req.params.id;

    models.Space.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la recuperation d'espace"
        })
    })
}

function index(req, res) {
    models.Space.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la recuperation des espaces"
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
            message: "espace mise a jours avec succes"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la mise à jours d'espace"
        })
    })
}

function destroy(req, res) {
    const id = req.params.id;

    models.Space.destroy({ where: { id: id } }).then(result => {
        res.status(200).json({
            message: "Spaces suprimé avec succes"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la supression d'espace"
        })
    })
}

module.exports = {
    save: save,
    show: show,
    index: index,
    update: update,
    destroy: destroy,
}