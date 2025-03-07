/* eslint-disable prettier/prettier */
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/scss/autoplay';
import { Autoplay, FreeMode } from 'swiper/modules';

export const useHeroSlider = () => {
  document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.hero__slider', {
      modules: [FreeMode, Autoplay],
      spaceBetween: 20,
      slidesPerView: 'auto',
      loop: true,
      speed: 5000,
      freeMode: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      simulateTouch: false,
      touchStartPreventDefault: true,
    });
  });
};
