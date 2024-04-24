import Swiper from 'swiper';

import { Navigation } from 'swiper/modules';



const mySwiper = new Swiper(".swiper", {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    modules: [ Navigation ],
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        1440: {
            slidesPerView: 6,
            spaceBetween: 0
        }
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",

    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    mousewheel: {
    invert: true,
  },
});

   