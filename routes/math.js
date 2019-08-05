var express = require('express');
var router = express.Router();

var calController = require('../controllers/calcuControler');

router.post('/result', calController.calculator);

router.get('/form', (req, res)=>{
    res.render('calculator');
});



module.exports = router;