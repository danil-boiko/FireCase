/*$(function () {
    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active')
    });
});*/

document.getElementById('menu__btn').onclick = function() {
    document.getElementById('menu__list').classList.add('menu__list--active');
    document.getElementById('menu__btn').onclick = function() {
        document.getElementById('menu__list').classList.toggle('menu__list--active');
      }
  }