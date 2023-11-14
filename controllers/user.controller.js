const Validator = require('fastest-validator');
const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// async function test(req,res){
//     const user = await models.User.findByPk(1,{
//         include:[models.Role]
//     })

//     const role = await models.Role.findByPk(1)

//     res.status(200).json({
//         data:role
//     })
// }


const signUp = async (req, res) => {
    try {
        const existingUser = await models.User.findOne({ where: { email: req.body.email } });

        if (existingUser) {
            return res.status(409).json({
                message: "L'email existe déjà",
            });
        }

        const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(req.body.password, salt);

        const user = {
            name: req.body.name,
            email: req.body.email,
            password: hash,
            roleId: req.body.roleId
        };

        const createdUser = await models.User.create(user);

        res.status(200).json({
            message: "Création réussie !",
            user: createdUser
        });
    } catch (error) {
        console.error("An error occurred:", error);

        let errorMessage;
        let statusCode;

        if (error instanceof models.Sequelize.ValidationError) {
            errorMessage = "Validation error";
            statusCode = 400;
        } else {
            errorMessage = "Une erreur est survenue lors de la création de l'utilisateur";
            statusCode = 500;
        }

        return res.status(statusCode).json({
            message: errorMessage,
            error: error.message
        });
    }
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



async function login(req, res) {
    try {
        const user = await models.User.findOne({ where: { email: req.body.email } });

        if (!user) {
            return res.status(401).json({
                message: "Authentification invalide",
            });
        }

        const result = await bcryptjs.compare(req.body.password, user.password);

        if (result) {
            const token = jwt.sign({
                email: user.email,
                userId: user.id
            }, 'secret');

            // Include user data in the response
            return res.status(200).json({
                message: "Authentification réussie",
                token: token,
                user
            });
        } else {
            return res.status(401).json({
                message: "Authentification invalide",
            });
        }
    } catch (error) {
        console.error("An error occurred:", error);
        return res.status(500).json({
            message: "Une erreur est survenue",
            error: error.message
        });
    }
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
    signUp: signUp,
    login: login,
    show: show,
    index: index,
    update: update,
    destroy: destroy,
}
