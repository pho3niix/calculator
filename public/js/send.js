window.onload = function(){

    var datos;
    var btn = document.getElementById('send');

    btn.addEventListener("click", ()=>{

        var n1 = parseFloat(document.getElementById('n1').value);
        var n2 = parseFloat(document.getElementById('n2').value);
        var fn = parseInt(document.getElementById('action').value);
        var result = document.getElementById('result');

        axios.post('/math/result/', {
                a: n1,
                b: n2,
                fn: fn
        })
        .then((res)=>{
            datos = res;
            result.innerHTML = datos.data.resultado;
            
        })
        .catch((err)=>{
            console.log(datos= err)
        })
    });

}