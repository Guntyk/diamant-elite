import { Pagination, Navigation } from 'swiper/modules';
import styles from 'pages/Main/blocks/Team/Team.scss';

export const sliderOptions = {
  pagination: {
    el: '#pagination',
    bulletClass: styles.bullet,
    bulletActiveClass: styles.active,
    clickable: true,
  },
  simulateTouch: false,
  lazy: {
    loadOnTransitionStart: true,
    loadPrevNext: true,
  },
  navigation: { nextEl: '#btnNext', prevEl: '#btnPrev', disabledClass: styles.btnDisabled },
  breakpoints: {
    1200: {
      speed: 1000,
      spaceBetween: 100,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    992: {
      speed: 1000,
      spaceBetween: 30,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    768: {
      speed: 500,
      spaceBetween: 50,
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    320: {
      speed: 250,
      spaceBetween: 10,
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
  },
  spaceBetween: 5,
  modules: [Navigation, Pagination],
};
