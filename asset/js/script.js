var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor:'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dinamicBullets:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:
  {
    0:{
      slidesPerView: 1,
    },
    520:{
      slidesPerView: 1,
    },
    950:{
      slidesPerView: 3,
    },
  }

});

const header = document.querySelector('header');
const img = document.getElementById('nav-img');
let navbar = document.querySelector('nav')

window.addEventListener('scroll',() => {
  if(window.scrollY > 50){
      header.classList.add('scrolled')
      img.src = "./asset/img/logo.svg"
      navbar.dataset.bsTheme ="light"
  }
  else if(window.scrollY <= 50)
  {
      header.classList.remove('scrolled')
      img.src = "./asset/img/logo.png"
      navbar.dataset.bsTheme ="dark"
  }
})