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