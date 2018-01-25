var burgerButton = document.querySelector(".header__open-nav");
var mainNav = document.querySelector(".main-nav__list");
var searchBtn = document.querySelector(".search__btn");
var searchInput = document.querySelector(".search__input");

burgerButton.addEventListener('click', function (event) {
    event.preventDefault();
    mainNav.classList.toggle("main-nav--closed");
});

searchBtn.addEventListener("click", function (event) {
    event.preventDefault();
    searchInput.classList.toggle("search__input--closed")
});


$(function() {

    $(window).scroll(function() {
        if($(this).scrollTop() >= 100) {
            $('.page-header').addClass('main-nav--fixed');
        }
        else{
            $('.page-header').removeClass('main-nav--fixed');
        }
    });

    $('.portfolio__list').masonry({
        // set itemSelector so .grid-sizer is not used in layout
        fitWidth: true,
        itemSelector: '.portfolio__item',
        gutter: 10
    });

    $(window).scroll(function() {
        if($(this).scrollTop() >= 100) {
            $('.btn-to-up').fadeIn();
        } else {
            $('.btn-to-up').fadeOut();
        }
    });

    $('.btn-to-up').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });

});