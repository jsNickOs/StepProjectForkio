
$(document).ready(function () {

    $('.nav-bar__button-menu--inactive').on('click', function () {
        const menu = $('.nav-bar__drop-down-menu--inactive');
        menu.removeClass('nav-bar__drop-down-menu--inactive');
        menu.addClass('nav-bar__drop-down-menu--active');
        $('.nav-bar__button-menu--inactive').css('z-index', 1);
    });

    $('.nav-bar__button-menu--active').on('click', function () {
        const menu = $('.nav-bar__drop-down-menu--active');
        menu.removeClass('nav-bar__drop-down-menu--active');
        menu.addClass('nav-bar__drop-down-menu--inactive');
        $('.nav-bar__button-menu--inactive').css('z-index', 3);
    });

});