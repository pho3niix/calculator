$(document).ready(function(){
    var keys = document.querySelector('.nums');
    var display = document.querySelector('#op');
    var datos = {};
    var fn = {};
    var params = {};

    keys.addEventListener("click", e=>{
        
        var key = e.target;
        var action = key.dataset.action;
        var keyContent =  key.textContent;
        var disNum = display.textContent;
        var val;
        var first;

        if(!action){
            if(disNum == 0){
                display.textContent = keyContent;
            }else{
                display.textContent = disNum + keyContent;
            }
        }else if(action=='men' || action=='sum' || action=='multi' || action=='divi'){
            var first = display.textContent;
            val = key.getAttribute("value");
            params = {
                a: first,
                fn: val
            }
            display.textContent = 0;
        }

        if(action == 'equal'){

            if(display.textContent == 0){
                console.log('nothing');
            }else{
                var second = display.textContent;

                datos = {
                    a: params.a,
                    b: second,
                    fn: params.fn
                }

                axios.post('/math/result/', datos)
                .then((res)=>{
                    var data = res.data.resultado;
                    display.textContent = data;
                })
                .catch((err)=>{
                    console.log(datos= err)
                })
            }

        }else if(action== 'clear'){
            display.textContent = 0;
        }else if(action=='point'){
            display.textContent = disNum + '.';
        }

    });
});