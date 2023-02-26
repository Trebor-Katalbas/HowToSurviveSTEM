// Content Slider
var swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 25,
      centerSlide: 'true',
      fade: 'true',
      grabCursor: 'true',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints:{
        0: {
          slidesPerView: 1,
      },
        520: {
          slidesPerView: 2,
      },
        950: {
          slidesPerView: 3,
      },
      },
    });

// Member Slider
var swiper = new Swiper(".slide-content2", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

// Dark Mode
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const sc = document.querySelector('.slide-container');
const t1 = document.querySelector('.title-1');

toggle.addEventListener('click', function(){
  this.classList.toggle('bx-sun');
  if(this.classList.toggle('bx-moon')){
    body.style.background = '#ECDBBA';
    body.style.color = '#191919';
    sc.style.background = '#2D4263';
    t1.style.background = 'rgba(236, 219, 186, 0.75)';
    t1.style.transition = '4s';
    body.style.transition = '2s';
    sc.style.transition = '2s';
  } else {
    body.style.background = '#191919';
    body.style.color = '#ECDBBA';
    sc.style.background = '#ECDBBA';
    t1.style.background = 'rgba(25, 25, 25, 0.92)';
    t1.style.transition = '4s';
    body.style.transition = '2s';
    sc.style.transition = '2s';
  }
})