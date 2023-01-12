var jQuery = $;
$(document).ready(function() {
    $('.order-tab ul li').click(function() {
        var clickedElement = $(this).index() + 1;
        $('.order-tab ul li').removeClass("active");
        $('.order-form > div').hide();
        $('.order-form > div:nth-child(' + clickedElement + ')').show();
        $(this).addClass("active");
    });



    /*faQ js */

    $('.qustion').click(function() {
        $('.answer').slideUp();
        $('.accordion-item').removeClass('active');
        if ($(this).parents('.accordion-item').children('.answer').is(":visible")) {
            $(this).parents('.accordion-item').children('.answer').slideUp();
            $(this).parents('.accordion-item').removeClass('active');
        } else {
            $(this).parents('.accordion-item').children('.answer').slideDown();
            $(this).parents('.accordion-item').addClass('active');
        }
    });

    $('.accordion-title').click(function() {
        $('.accordion').toggle();
        $(this).toggleClass("active");
    });

    $('.promo-code .title span ').click(function() {
        $('.promo-code .input-field').toggle();
    });

});