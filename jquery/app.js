$(document).ready(function () {

    
    $(".darkmode-container").click(function () {
        $("body").toggleClass("darkmode");

    });

    $(".nav-link").click(function () {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });

   

});

