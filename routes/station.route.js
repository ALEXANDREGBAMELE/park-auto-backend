const express = require('express');
const stationController = require('../controllers/station.controller')

const router = express.Router();

router.post("/", stationController.save);
router.get("/", stationController.index);
router.get("/:id", stationController.show);
router.put("/:id", stationController.update);
router.delete("/:id", stationController.destroy);


module.exports = router;