$(function () {
    "use strict";
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 40) {
            $('.navbar').addClass('menu_fix');
        } else {
            $(".navbar").removeClass('menu_fix');
        }
    })
});