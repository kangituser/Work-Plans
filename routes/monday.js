const router = require('express').Router();
const RadioController = require('../controllers/radio');

router.get('/radio', RadioController.getRadioValues)

module.exports = router;