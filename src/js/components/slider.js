/* eslint-disable prettier/prettier */
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/scss/autoplay';
import { Autoplay, FreeMode } from 'swiper/modules';

export const useHeroSlider = () => {
  // Инициализация слайдера только после того, как DOM загружен
  document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.hero__slider', {
      modules: [FreeMode, Autoplay],
      spaceBetween: 20,
      slidesPerView: 'auto',
      loop: true,
      speed: 2000,
      freeMode: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
    });
  });
};
