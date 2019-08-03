function valNum(event){
    if(event.charCode >= 48 && event.charCode<=57){
        return true;
    }else{
        return false;
    }
}

window.onload = function(){

    var m1 = document.getElementById('n1');
    var m2 = document.getElementById('n2');
    var m3 = document.getElementById('action');
    var result = document.getElementById('result');

    var btn = document.getElementById('send');
    btn.addEventListener("click", ()=>{

        var n1 = parseFloat((m1).value);
        var n2 = parseFloat((m2).value);
        var fn = parseInt((m3).value);

        axios.post('/math/result/', {
                a: n1,
                b: n2,
                fn: fn
        })
        .then((res)=>{
            var data = res.data.resultado;
            result.innerHTML = data;
        })
        .catch((err)=>{
            console.log(datos= err)
        })
    });

}