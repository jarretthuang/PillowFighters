$(document).ready(function(){
    var random_boolean = Math.random() >= 0.5;
    if (random_boolean) {
        $("body").css("background-color", "white");
        $("body").css("filter", "invert(100%)");
    }
    
    $("#join-button").click(function() {
        $("#application-form").modal({
            fadeDuration: 100
        });
    });
});
