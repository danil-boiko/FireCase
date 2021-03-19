$(function () {

    /*ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ В МОБИЛЬНОЙ ВЕРСИИ*/

    $('.menu__btn').on('click', function () {
        $('.menu__mobile').toggleClass('menu__mobile--active')
    });

    /*ОТКРЫТИЕ И ЗАКРЫТИЕ МОДАЛЬНЫХ ОКОН СО СТРАНИЦЫ ПРОДУКТА*/

    $('.md-trigger-1').on('click', function () {
        $('.md-modal-1').addClass('md-show');
        document.body.style.overflow = 'hidden';
    });

    $('.md-trigger-2').on('click', function () {
        $('.md-modal-2').addClass('md-show');
        document.body.style.overflow = 'hidden';
    });

    $('.md-trigger-3').on('click', function () {
        $('.md-modal-3').addClass('md-show');
        document.body.style.overflow = 'hidden';
    });

    $('.md-close-1').on('click', function () {
        $('.md-modal-1').removeClass('md-show');
        document.body.style.overflow = 'visible';
    });

    $('.md-close-2').on('click', function () {
        $('.md-modal-2').removeClass('md-show');
        document.body.style.overflow = 'visible';
    });

    $('.md-close-3').on('click', function () {
        $('.md-modal-3').removeClass('md-show');
        document.body.style.overflow = 'visible';
    });

    /*ОТКРЫТИЕ НОВЫХ МОДАЛЬНЫХ ОКОН ИЗ УЖЕ ОТКРЫТЫХ МОДАЛЬНЫХ ОКОН*/

    $('.md-reopen-1').on('click', function () {
        $('.md-modal-2').removeClass('md-show');
        $('.md-modal-3').removeClass('md-show');
        $('.md-modal-1').addClass('md-show');
        document.body.style.overflow = 'hidden';
    });

    $('.md-reopen-2').on('click', function () {
        $('.md-modal-1').removeClass('md-show');
        $('.md-modal-3').removeClass('md-show');
        $('.md-modal-2').addClass('md-show');
        document.body.style.overflow = 'hidden';
    });

    $('.md-reopen-3').on('click', function () {
        $('.md-modal-1').removeClass('md-show');
        $('.md-modal-2').removeClass('md-show');
        $('.md-modal-3').addClass('md-show');
        document.body.style.overflow = 'hidden';
    });

});

