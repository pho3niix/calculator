var express = require('express');
var router = express.Router();

var calController = require('../controllers/calcuControler');

router.post('/operations', calController.calculator);

router.get('/calculator', (req, res)=>{
    res.render('calculator');
});



module.exports = router;