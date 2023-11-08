const express = require('express');
const roleController = require('../controllers/role.controller')

const router = express.Router();

router.get("/", roleController.index);
router.get("/:id", roleController.show);

module.exports = router;