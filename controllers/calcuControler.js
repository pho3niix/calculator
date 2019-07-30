// arithmetic functions

const math = {};


math.calculator = (req, res)=>{
    var a = parseInt(req.body.a);
    var b = parseInt(req.body.b);
    var c = 0;
    var action = req.body.action;
    
    switch(action){
        case 'suma':
            c = (a + b).toString();
            res.status(200).json({
                status: true,
                resultado: c
            });
            break;
        case 'resta':
            c = (a - b).toString();
            res.status(200).json({
                status: true,
                resultado: c
            });
            break;
        case 'dividir':
            c = (a / b).toString();
            res.status(200).json({
                status: true,
                resultado: c
            });
            break;
        case 'multi': 
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