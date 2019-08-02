// arithmetic functions

const math = {};

math.calculator = (req, res)=>{
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);
    var c;
    var action = req.query.action;
    
    switch(action){

        // function suma
        case 1:
            c = (a + b).toString();
            res.status(200).json({
                resultado: c
            });
            break;

            // function rest
        case 2:
            c = (a - b).toString();
            res.status(200).json({
                resultado: c
            });
            break;

            // function dividir
        case 3:
            c = (a / b).toString();
            res.status(200).json({
                resultado: c
            });
            break;

            // funcion multiplicacion
        case 4: 
            c = (a * b).toString();
            res.status(200).json({
                resultado: c
            });
            break;
        default:
            res.send('no existe');
    }

}

module.exports = math;