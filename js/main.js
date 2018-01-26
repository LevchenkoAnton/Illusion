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
    if (searchInput.classList.contains("search__input--closed")) {
        searchInput.classList.remove("search__input--closed");
        searchInput.focus();
    } else {
        searchInput.classList.add("search__input--closed");
    }
});


$(function() {

    $(window).scroll(function() {
        if($(this).scrollTop() >= 100) {
            $('.page-header').addClass('main-nav--fixed');
            $('.btn-to-up').fadeIn();
        }
        else{
            $('.page-header').removeClass('main-nav--fixed');
            $('.btn-to-up').fadeOut();
        }
    });

    $('.btn-to-up').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });


    // init Masonry
    var $grid = $('.portfolio__list').masonry({
        itemSelector: '.portfolio__item',
        percentPosition: true,
        columnWidth: '.portfolio__sizer',
        gutter: '.gutter-sizer'
    });
// layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.masonry();
    });


});