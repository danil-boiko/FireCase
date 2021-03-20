$(function () {

    /*ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ В МОБИЛЬНОЙ ВЕРСИИ*/

    $('.menu__btn').on('click', function () {
        $('.menu__mobile').toggleClass('menu__mobile--active')
    });

    /*ЗАКРЫТИЕ ПРОШЛОГО ОКНА АККОРДЕОНА ПРИ ОТКРЫТИИ НОВОГО*/

    /*$("#btn1").click(function () {
        $("#collapseOne").classList.add('indsds');
    });*/

    document.getElementById('btn-1').onclick = function () {
        document.getElementById('collapseOne').classList.add('in');
        $("#collapseThree").collapse('hide');
        $("#collapseTwo").collapse('hide');
    }

    document.getElementById('btn-2').onclick = function () {
        document.getElementById('collapseTwo').classList.add('in');
        $("#collapseOne").collapse('hide');
        $("#collapseThree").collapse('hide');
    }

    document.getElementById('btn-3').onclick = function () {
        document.getElementById('collapseThree').classList.add('in');
        $("#collapseOne").collapse('hide');
        $("#collapseTwo").collapse('hide');
    }

    $(".modal__points-item-1").click(function () {
        $("#collapseOne").collapse('toggle');
        $("#collapseThree").collapse('hide');
        $("#collapseTwo").collapse('hide');
    });
    $(".modal__points-item-2").click(function () {
        $('#collapseTwo').collapse('toggle');
        $("#collapseOne").collapse('hide');
        $("#collapseThree").collapse('hide');
    });
    $(".modal__points-item-3").click(function () {
        $("#collapseThree").collapse('toggle');
        $("#collapseOne").collapse('hide');
        $("#collapseTwo").collapse('hide');
    });
});


