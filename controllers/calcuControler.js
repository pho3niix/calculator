// arithmetic functions

const math = {};

math.calculator = (req, res)=>{
    var a = parseFloat(req.body.a);
    var b = parseFloat(req.body.b);
    var c;
    var fn = parseInt(req.body.fn);
    
    switch(fn){

        // function suma
        case 1:
            c = parseFloat(a + b);
            res.status(200).json({
                resultado: c
            });
            break;

            // function rest
        case 2:
            c = parseFloat(a - b);
            res.status(200).json({
                resultado: c
            });
            break;

            // function dividir
        case 3:
            c = parseFloat(a / b);
            res.status(200).json({
                resultado: c
            });
            break;

            // funcion multiplicacion
        case 4: 
            c = parseFloat(a * b);
            res.status(200).json({
                resultado: c
            });
            break;
        default:
            res.status(200).json({
                resultado: "Syntax Error"
            });
    }

}

module.exports = math;