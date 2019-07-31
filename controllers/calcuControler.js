// arithmetic functions

const math = {};


math.calculator = (req, res)=>{
    var a = parseFloat(req.body.a);
    var b = parseFloat(req.body.b);
    var c = 0;
    var action = req.body.action;
    
    switch(action){

        // function suma
        case 1:
            c = (a + b).toString();
            res.status(200).json({
                status: true,
                resultado: c
            });
            break;

            // function rest
        case 2:
            c = (a - b).toString();
            res.status(200).json({
                status: true,
                resultado: c
            });
            break;

            // function dividir
        case 3:
            c = (a / b).toString();
            res.status(200).json({
                status: true,
                resultado: c
            });
            break;

            // funcion multiplicacion
        case 4: 
            c = (a * b).toString();
            res.status(200).json({
                status: true,
                resultado: c
            });
            break;
        default:
            res.send('no existe');
    }

}

module.exports = math;