const express = require('express');
const spaceContrpoller = require('../controllers/space.controller')

const router = express.Router();

router.post("/", spaceContrpoller.save);
router.get("/", spaceContrpoller.index);
router.get("/:id", spaceContrpoller.show);
router.put("/:id", spaceContrpoller.update);
router.delete("/:id", spaceContrpoller.destory);

module.exports = router;