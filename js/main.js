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
})


var elem = document.querySelector('.portfolio__list');
var msnry = new Masonry( elem, {
    // options
    itemSelector: '.portfolio__item',
    columnWidth: 200
});
/*

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
    // options
});*/
