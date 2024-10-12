import { Pagination, Navigation } from 'swiper/modules';
import styles from 'pages/Main/blocks/Testimonials/Testimonials.scss';

export const sliderOptions = {
  pagination: {
    el: '#paginationReview',
    bulletClass: styles.bullet,
    bulletActiveClass: styles.active,
    clickable: true,
  },
  simulateTouch: false,
  navigation: { nextEl: '#btnNextReview', prevEl: '#btnPrevReview', disabledClass: styles.disabled },
  modules: [Navigation, Pagination],
  breakpoints: {
    576: {
      speed: 500,
      slidesPerView: 1,
      centeredSlides: false,
    },
    320: {
      speed: 400,
      spaceBetween: 20,
      slidesPerView: 1.5,
      centeredSlides: true,
    },
  },
};
