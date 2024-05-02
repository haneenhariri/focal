var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 25,
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
window.addEventListener('scroll',() => {
  if(window.scrollY > 400){
      header.classList.add('scrolled')
  }
  else if(window.scrollY <= 400)
  {
      header.classList.remove('scrolled')
  }
})