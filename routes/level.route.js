const express = require('express');
const levelContrpoller = require('../controllers/level.controller')

const router = express.Router();

router.post("/", levelContrpoller.save);
router.get("/", levelContrpoller.index);
router.get("/:id", levelContrpoller.show);
router.put("/:id", levelContrpoller.update);
router.delete("/:id", levelContrpoller.destory);

module.exports = router;