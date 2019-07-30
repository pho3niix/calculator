var express = require('express');
var router = express.Router();

var calController = require('../controllers/calcuControler');

router.post('/', calController.calculator);

module.exports = router;