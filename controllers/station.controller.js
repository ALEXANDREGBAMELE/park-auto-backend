const Validator = require('fastest-validator');
const models = require('../models');
// const bcryptjs = require("jsonwebtoken");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


const save = (req, res) => {
    models.User.findOne({ where: { email: req.body.email } })
        .then(existingUser => {
            if (existingUser) {
                // L'utilisateur existe déjà
                return res.status(409).json({
                    message: "L'email existe déjà",
                });
            } else {
                // L'utilisateur n'existe pas, procédez à la création
                bcryptjs.genSalt(10, function (err, salt) {
                    if (err) {
                        return res.status(500).json({
                            message: "Une erreur est survenue lors de la génération du sel",
                            error: err
                        });
                    }

                    bcryptjs.hash(req.body.password, salt, function (err, hash) {
                        if (err) {
                            return res.status(500).json({
                                message: "Une erreur est survenue lors du hachage du mot de passe",
                                error: err
                            });
                        }

                        const user = {
                            name: req.body.name,
                            email: req.body.email,
                            password: hash,
                            roleId: req.body.roleId
                        };

                        models.User.create(user)
                            .then(createdUser => {
                                res.status(200).json({
                                    message: "Création réussie !",
                                    user: createdUser
                                });
                            })
                            .catch(error => {
                                res.status(500).json({
                                    message: "Une erreur est survenue lors de la création de l'utilisateur",
                                    error: error
                                });
                            });
                    });
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Une erreur est survenue lors de la recherche de l'utilisateur existant",
                error: error
            });
        });
};




// const schema = {
//     name: { type: "string", optional: false, max: "100" },
//     email: { type: "string", optional: false, max: "100" },
//     password: { type: "string", optional: false, max: "8" },
//     roleId: { type: "number", optional: false }
// }

// const v = new Validator();
// const validationResponse = v.validate(user, schema)

// if (validationResponse !== true) {
//     return res.status(400).json({
//         message: "donnee non valide",
//         errors: validationResponse
//     })
// }



function show(req, res) {
    const id = req.params.id;

    models.User.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la recuperation d'utilisateur"
        })
    })
}

function index(req, res) {
    models.User.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la recuperation des utilisateurs"
        })
    })
}

function update(req, res) {
    const id = req.params.id;
    const updateUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        roleId: req.body.roleId
    }

    models.User.update(updateUser, { where: { id: id } }).then(result => {
        res.status(200).json({
            message: "Utilisateur mise a jours avec succes"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la mise à jours de l'utilisateurs"
        })
    })
}

function destroy(req, res) {
    const id = req.params.id;

    models.User.destroy({ where: { id: id } }).then(result => {
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
    destroy: destroy
}