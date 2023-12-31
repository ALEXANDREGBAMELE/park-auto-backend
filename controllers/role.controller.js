const models = require('../models')

function save(req, res) {
    const role = {
        number: req.body.number,
        status: req.body.status,
        occupacyTime: req.body.occupacyTime,
        userId: req.body.userId,
        levelId: req.body.levelId
    }

    models.Role.create(role).then(result => {
        res.status(200).json({
            message: "creation avec succes !",
            space: result
        })
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la creation de Role",
            error: error
        })
    })
}

function update(req, res) {
    const id = req.params.id;
    const updateRole = {
        number: req.body.number,
        status: req.body.status,
        occupacyTime: req.body.occupacyTime,
        userId: req.body.userId,
        levelId: req.body.levelId
    }

    models.Role.update(updateRole, { where: { id: id } }).then(result => {
        res.status(200).json({
            message: "Role mise a jours avec succes"
        });
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la mise à jours de Role"
        })
    })
}

function show(req, res) {
    const id = req.params.id;

    models.Role.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la recuperation de role"
        })
    })
}

function index(req, res) {
    models.Role.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la recuperation des roles"
        })
    })
}

const destroy = (req, res) => {
    const roleId = req.params.roleId;

    models.User.findOne({
        where: { roleId: roleId }
    }).then(user => {
        if (user) {
            res.status(400).json({
                message: "Ce rôle est actuellement utilisé par au moins un utilisateur. Vous ne pouvez pas le supprimer."
            });
        } else {
            models.Role.destroy({
                where: { roleId: roleId }
            }).then(result => {
                res.status(200).json({
                    message: "Rôle supprimé avec succès"
                });
            }).catch(error => {
                res.status(500).json({
                    message: "Une erreur est survenue lors de la suppression du rôle"
                });
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Une erreur est survenue lors de la vérification des utilisateurs liés au rôle"
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