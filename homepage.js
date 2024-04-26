// Initialize Swiper
var mySwiper = new Swiper('.mySwiper', {
    // Other settings...
    autoplay: {
      delay: 5000, // Time between slides in milliseconds (5 seconds in this case)
      disableOnInteraction: false, // Allows manual navigation while autoplay is enabled
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
