const Validator = require('fastest-validator');
const models = require('../models');
const bcryptjs = require("jsonwebtoken");

// async function test(req,res){
//     const user = await models.User.findByPk(1,{
//         include:[models.Role]
//     })

//     const role = await models.Role.findByPk(1)

//     res.status(200).json({
//         data:role
//     })
// }


function signUp(req, res) {

    models.User.findOne({ where: { email: req.body.email } }).then(result => {
        if (result) {
            res.status(409).json({
                message: "email existe deja",
            })
        }
        else {
            bcryptjs.genSalt(10, function (err, salt) {
                bcryptjs.hash(req.body.password, salt, function (err, hash) {

                    const user = {
                        name: req.body.name,
                        email: req.body.email,
                        password: hash,
                        roleId: req.body.roleId
                    }

                    models.User.create(user).then(result => {
                        res.status(200).json({
                            message: "creation avec succes !",
                            user: result
                        })
                    })
                })
            })
        }
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la creation d'utilisateur",
            error: error
        })
    })

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

}

function login(req, res) {
    models.User.findOne({ where: { email: req.body.email } }).then(user => {
        if (user==null) {
            res.status(401).json({
                message: "authentification invalide",
            })
        }else{
            bcryptjs.comparse(req.body.password, user.password, function(err, result){
                if (result) {
                    const token = jwt.sign({
                        email: user.email,
                        userId: user.id
                    }, 'secret' , function(err,token){
                        res.status(200).json({
                            message: "authentification avec succes",
                            token: token
                        });
                    });
                }else{
                    res.status(401).json({
                        message: "authentification invalide",
                    })
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue ",
            error: error
        });
    });
}

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

function destory(req, res) {
    const id = req.params.id;

    models.User.destory({ where: { id: id } }).then(result => {
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
    signUp: signUp,
    login: login,
    show: show,
    index: index,
    update: update,
    destory: destory
}