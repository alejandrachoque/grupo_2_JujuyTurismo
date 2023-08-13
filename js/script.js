// funcionalidad del breakpoint Navbar
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
}
// funcionalidad del breakpoint Navbar


// funcionalidad barra de busqueda

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () => {
    searchForm.classList.remove('active');
}
// funcionalidad barra de busqueda



window.onscroll = () => {
    navbar.classList.remove('active');
};

// carrusel con swiperjs
var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// carrusel con swiperjs