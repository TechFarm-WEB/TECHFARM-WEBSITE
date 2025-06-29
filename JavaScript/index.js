let searchFrom = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick= ()=>{
    searchFrom.classList.toggle('active');
     loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick= ()=>{
    loginForm.classList.toggle('active');
    searchFrom.classList.remove('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick= ()=>{
    navbar.classList.toggle('active');
    searchFrom.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll= ()=>{
    searchFrom.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
var swiper = new Swiper(".review-slider", {
      loop :true,
      spaceBetween: 20,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },


      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
        },
        "@0.75": {
          slidesPerView: 2,
        },
        "@1.00": {
          slidesPerView: 3,
        },
        "@1.50": {
          slidesPerView: 4,
        },
      },
    });