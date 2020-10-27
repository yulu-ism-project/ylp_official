'use strict';
// pc-nav
$('.to-works').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#works").offset().top
    }, 700);
});
$('.to-composer').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#composer").offset().top
    }, 700);
});
$('.to-contact').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 700);
});
$('.to-top').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 700, 'swing')
});
// main visual
$('.carousel').carousel({
    interval: 4000
})
// sp-nav
$(function() {
    $('.sp-menu').click(function() {
        // ハンバーガーメニューclick
        $(this).toggleClass('show');
 
        if ($(this).hasClass('show')) {
            $('.overlay').addClass('show');
        } else {
            $('.overlay').removeClass('show');
        }
    });
    // バッテン押したらメニュー閉じる
    $('#close').on('click', function(event) {
        $('.overlay').removeClass('show');
    });
    // リンクから先に飛ぶ
    $('.overlay a[href]').on('click', function(event) {
        $('.sp-menu').trigger('click');
    });
});