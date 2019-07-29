var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({message: 'escuchando'})
});

router.get('/users/hola', function(req, res, next) {
  res.status(200).json(
    {
      message: "probando peticiones en postman"
    }
  );
});

// router.get('/users/b', (req, res, next)=>{
//   console.log('la respuesta sera enviada por la siguiente funcion');
//   next();
// }, (req, res)=>{
//   res.send('este es un mensaje enviado desde B');
// });

// var cb0 = function (req, res, next) {
//   console.log('CB0');
//   next();
// }

// var cb1 = function (req, res, next) {
//   console.log('CB1');
//   next();
// }

// var cb2 = function (req, res) {
//   res.send('Hello from C!');
// }

// router.get('/users/c', [cb0, cb1, cb2]);

module.exports = router;