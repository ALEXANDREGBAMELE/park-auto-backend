const express = require('express');
const userController = require('../controllers/user.controller')

const router = express.Router();

router.post("/sign-up", userController.signUp);
router.get("/", userController.index);
router.get("/:id", userController.show);
router.put("/:id", userController.update);
router.delete("/:id", userController.destory);
router.post("/login", userController.login);

module.exports = router;