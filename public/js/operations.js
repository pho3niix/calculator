window.onload = function(){
    // buttons variables

    var keys = document.querySelector('.nums');
    var display = document.querySelector('#op');

    keys.addEventListener("click", e=>{
        
        var key = e.target;
        var action = key.dataset.action;
        var keyContent =  key.textContent;
        var disNum = display.textContent;

        if(!action){
            console.log(keyContent);
            if(disNum == 0){
                display.textContent = keyContent;
            }else{
                display.textContent = disNum + keyContent;
            }
        }else if(action=='add' || action=='subs' || action=='multi' || action=='divide'){
            console.log('operation key');
        }

        if(action == 'equal'){
            console.log('equal key');
        }else if(action== 'clear'){
            display.textContent = "0";
        }else if(action=='point'){
            display.textContent = disNum + '.'
        }
    });

}