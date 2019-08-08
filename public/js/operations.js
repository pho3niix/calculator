$(document).ready(function(){
    var keys = document.querySelector('.nums');
    var display = document.querySelector('#op');
    var datos = {};
    var params = {};

    keys.addEventListener("click", e=>{
        
        var key = e.target;
        var action = key.dataset.action;
        var keyContent =  key.textContent;
        var disNum = display.textContent;
        var fn;
        var first;

        if(!action){
            if(disNum == '0'){
                display.textContent = keyContent;
            }else if(disNum == '0.'){
                display.textContent = '0.' +keyContent;
            }else{
                display.textContent = disNum + keyContent;
            }

        }else if(action=='men' || action=='sum' || action=='multi' || action=='divi'){
            var first = display.textContent;
            fn = key.getAttribute("value");
            params = {
                a: first,
                fn: fn
            }
            display.textContent = 0;
        }

        if(action == 'equal'){
            if(display.textContent == 0 || params.first == 0){
                console.log('nothing');
            }else{
                
                var second = display.textContent;
                datos = {
                    a: params.a,
                    b: second,
                    fn: params.fn   
                }

                axios.post('/operations/', datos)
                .then((res)=>{

                    var result = res.data.resultado;
                    
                    if(result.toString().length>10){
                        display.textContent = "Not supp"
                    }else{
                        display.textContent = result;
                    }

                })
                .catch((err)=>{
                    console.log(err)
                })
            }

        }else if(action== 'clear'){
            display.textContent = 0;
            params = {
                a: 0,
                fn: 0
            }
            datos = {
                a: 0,
                b: 0,
                fn: 0
            }
        }else if(action=='point'){
            if(!display.textContent.includes('.')){
                display.textContent = disNum + '.';
            }
        }

    });
});