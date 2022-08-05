$(document).ready(function () {

    
    $("#right-arrow").click(function () {
        $("#sidebar").toggleClass("close");
    });
    
    $("#left-arrow").click(function () {
        $("#sidebar").toggleClass("close");
    });


    $(".nav-link").click(function () {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });

  

    $(".darkmode-container").click(function () {
        $("body").toggleClass("darkmode");

    });

   

});
