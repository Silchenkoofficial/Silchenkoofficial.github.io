$(document).ready(function() {

    $(".header__menu--burger").on('click', function() {
        $(".dropdown__menu").css("transform", "translate(0)");
        $("body").css("overflow", "hidden");
    });

    $(".dropdown--close").on('click', function() {
        $(".dropdown__menu").css("transform", "translate(-100%)");
        $("body").css("overflow", "auto");
    });

});