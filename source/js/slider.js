'use strict';

(function () {
  if (document.querySelector('.slider')) {
    new Swiper('.slider__wrapper', {
      navigation: {
        nextEl: '.slider__btn--next',
        prevEl: '.slider__btn--previous',
      },

      pagination: {
        el: '.slider__pagination',
        renderBullet: function (index, bulletClass) {
          return '<span class="' + bulletClass + '">' + (index + 1) + '</span>';
        },
        bulletClass: 'pagination__item',
        bulletActiveClass: 'pagination__item--current',
        clickable: true,

      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            type: 'fraction',
          },
        },
        768: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          pagination: {
            type: 'bullets',
          },
        },
        1024:
        {
          slidesPerView: 4,
          slidesPerGroup: 4,
          pagination: {
            type: 'bullets',
          },
        },
      },

      spaceBetween: 30,
      loop: true,
    });
  }
})();
