$(document).ready(function(){
    $("#send").click(function(event){
        var n1 = $("#n1").val();
        var n2 = $("#n2").val();
        var fn = $("#action").val();

        var params = {
            "a": n1,
            "b": n2,
            "action": fn
        };
        
        event.preventDefault();

        $.ajax({
            method: "POST",
            url: "/math/result",
            data: JSON.stringify(params),
            dataType: "json",
            contentType: "application/json"
        }).done(function(){
            location.replace("/math/result");
            console.log(params);
        }).fail(function(err){
            console.log(err);
        })

    });
});