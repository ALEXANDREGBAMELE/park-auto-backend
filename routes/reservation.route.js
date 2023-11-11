const express = require('express');
const reservationController = require('../controllers/reservation.controller')

const router = express.Router();

router.get("/", reservationController.index);
router.post("/", reservationController.save);
router.get("/:id", reservationController.show);
router.put("/:id", reservationController.update);
router.delete("/:id", reservationController.destroy);

module.exports = router;