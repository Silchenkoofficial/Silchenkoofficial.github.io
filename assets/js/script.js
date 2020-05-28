$(document).ready(function() {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 140) {
            $('.header__menu').css('background-color', 'rgba(0, 0, 0, 1)');
        }
        else if ($(this).scrollTop() < 140) {
            $('.header__menu').css('background-color', 'rgba(0, 0, 0, 0.5)');
        }
    });

    $(".header__menu--burger").on('click', function() {
        $(".dropdown__menu").css("transform", "translate(0)");
        $("body").css("overflow", "hidden");
    });

    $(".dropdown--close").on('click', function() {
        $(".dropdown__menu").css("transform", "translate(-100%)");
        $("body").css("overflow", "auto");
    });
});