const express = require('express');
const userController = require('../controllers/user.controller')

const router = express.Router();

router.post("/", userController.save);
router.get("/", userController.index);
router.get("/:id", userController.show);
router.put("/:id", userController.update);
router.delete("/:id", userController.destory);

module.exports = router;