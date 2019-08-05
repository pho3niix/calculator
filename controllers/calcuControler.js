// arithmetic functions

const math = {};

math.calculator = (req, res)=>{
    var a = parseFloat(req.body.a);
    var b = parseFloat(req.body.b);
    var c;
    var fn = req.body.fn;
    
    switch(fn){

        // function suma
        case 'sum':
            c = (a + b).toString();
            res.status(200).json({
                resultado: c
            });
            break;

            // function rest
        case 'men':
            c = (a - b).toString();
            res.status(200).json({
                resultado: c
            });
            break;

            // function dividir
        case 'divi':
            c = (a / b).toString();
            res.status(200).json({
                resultado: c
            });
            break;

            // funcion multiplicacion
        case 'multi': 
            c = (a * b).toString();
            res.status(200).json({
                resultado: c
            });
            break;
        default:
            res.status(200).json({
                resultado: "Operacion no soportada"
            });
    }

}

module.exports = math;