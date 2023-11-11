const express = require('express');
const parkingController = require('../controllers/parking.controller')
const router = express.Router();

router.post("/", parkingController.save);
router.get("/", parkingController.index);
router.get("/:id", parkingController.show);
router.put("/:id", parkingController.update);
router.delete("/:id", parkingController.destroy);
router.get("/test/association",parkingController.tester);
module.exports = router;