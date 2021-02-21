'use strict';

(function () {
  if (document.querySelector('.slider')) {
    var slider = new window.Swiper('.slider__wrapper', {
      navigation: {
        nextEl: '.slider__btn--next',
        prevEl: '.slider__btn--previous',
      },

      pagination: {
        el: '.slider__pagination',
        renderBullet: function (index, bulletClass) {
          return '<li class="' + bulletClass + '">' + (index + 1) + '</li>';
        },
        bulletClass: 'pagination__list-item',
        bulletActiveClass: 'pagination__current-page',
        clickable: true,
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            type: 'custom',
            renderCustom: function (swiper, current, total) {
              return current + '  of  ' + (total);
            },
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

      lazy: {
        loadPrevNext: true,
      },

      spaceBetween: 30,
      loop: true,
    });

    slider.setGrabCursor();
  }
})();
