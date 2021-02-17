'use strict';

(function () {
  var accordionBlocks = document.querySelectorAll('.accordion__item');
  var accordionBlockHeaders = document.querySelectorAll('.accordion__item-header');

  var hideBlocks = function (blocks) {
    blocks.forEach(function (item) {
      item.closest('.accordion__item').classList.add('accordion__item--hidden');
    });
  };

  var removeActiveBlock = function (blocks) {
    if (blocks.length > 0) {
      blocks.forEach(function (block) {
        block.classList.remove('accordion__item--shown');
        block.classList.add('accordion__item--hidden');
      });
    }
  };

  var changeActiveBlockHandler = function (evt) {
    var currentBlock = evt.target.closest('.accordion__item');

    if (!currentBlock.classList.contains('accordion__item--shown')) {
      removeActiveBlock(accordionBlocks);
    }

    currentBlock.classList.toggle('accordion__item--shown');
    currentBlock.classList.toggle('accordion__item--hidden');
  };

  hideBlocks(accordionBlocks);
  accordionBlockHeaders.forEach(function (item) {
    item.addEventListener('click', changeActiveBlockHandler);
  });
})();

'use strict';

(function () {
  // added to cart modal
  if (document.querySelector('.js-to-cart')) {
    var toCartBtn = document.querySelector('.js-to-cart');
    var overlay = document.querySelector('#overlay-added');
    var closeModalBtn = overlay.querySelector('.js-close');

    var showModalHandler = function (evt) {
      evt.preventDefault();

      window.utils.showModal(overlay);

      closeModalBtn.addEventListener('click', hideModalHandler);
      overlay.addEventListener('click', overlayPressHandler);
      document.addEventListener('keydown', escPressHandler);
    };

    var hideModalHandler = function () {
      closeModalBtn.removeEventListener('click', hideModalHandler);
      overlay.removeEventListener('click', overlayPressHandler);
      document.removeEventListener('keydown', escPressHandler);

      window.utils.hideModal(overlay);
    };

    var escPressHandler = function (evt) {
      if (evt.key === 'Escape') {
        window.utils.hideModal(overlay);
      }
    };

    var overlayPressHandler = function (evt) {
      if (!evt.target.closest('.js-modal')) {
        window.utils.hideModal(overlay);
      }
    };

    toCartBtn.addEventListener('click', showModalHandler);
  }
})();

'use strict';

(function () {
  // shows catalog filters

  if (document.querySelector('.catalog__filter-open-btn')) {
    var showFiltersBtn = document.querySelector('.catalog__filter-open-btn');

    var overlay = document.querySelector('#overlay-filter');
    var closeModalBtn = overlay.querySelector('.js-close');

    var showModalHandler = function (evt) {
      evt.preventDefault();

      window.utils.showModal(overlay);
      closeModalBtn.addEventListener('click', hideModalHandler);
      overlay.addEventListener('click', overlayPressHandler);
      document.addEventListener('keydown', escPressHandler);
    };

    var hideModalHandler = function () {
      closeModalBtn.removeEventListener('click', hideModalHandler);
      overlay.removeEventListener('click', overlayPressHandler);
      document.removeEventListener('keydown', escPressHandler);

      window.utils.hideModal(overlay);
    };

    var escPressHandler = function (evt) {
      if (evt.key === 'Escape') {
        window.utils.hideModal(overlay);
      }
    };

    var overlayPressHandler = function (evt) {
      if (!evt.target.closest('.js-modal')) {
        window.utils.hideModal(overlay);
      }
    };

    showFiltersBtn.addEventListener('click', showModalHandler);
  }
})();

'use strict';

(function () {
  // login-form modal
  if (document.querySelectorAll('.js-login')) {
    var openLoginModalBtns = document.querySelectorAll('.js-login');

    var overlay = document.querySelector('#overlay-login');
    var closeLoginModalBtn = overlay.querySelector('.js-close');
    var form = overlay.querySelector('form');
    var userEmail = form.querySelector('.js-email');
    var userPassword = form.querySelector('.js-password');

    var isStorageSupport = true;
    var storage = '';

    var showLoginModalHandler = function (evt) {
      evt.preventDefault();

      window.utils.showModal(overlay);

      if (userEmail.value) {
        userPassword.focus();
      } else {
        userEmail.focus();
      }

      form.addEventListener('submit', submitHandler);
      closeLoginModalBtn.addEventListener('click', hideLoginModalHandler);
      overlay.addEventListener('click', overlayPressHandler);
      document.addEventListener('keydown', escPressHandler);
    };

    var hideLoginModalHandler = function () {
      closeLoginModalBtn.removeEventListener('click', hideLoginModalHandler);
      overlay.removeEventListener('click', overlayPressHandler);
      document.removeEventListener('keydown', escPressHandler);

      window.utils.hideModal(overlay);
    };

    var escPressHandler = function (evt) {
      if (evt.key === 'Escape') {
        window.utils.hideModal(overlay);
      }
    };

    var overlayPressHandler = function (evt) {
      if (!evt.target.closest('.js-modal')) {
        window.utils.hideModal(overlay);
      }
    };

    var submitHandler = function () {
      if (userEmail && isStorageSupport) {
        localStorage.setItem('email', userEmail.value);
      }
    };

    try {
      storage = localStorage.getItem('email');
    } catch (err) {
      isStorageSupport = false;
    }

    if (storage) {
      userEmail.value = localStorage.getItem('email');
    }

    openLoginModalBtns.forEach(function (btn) {
      btn.addEventListener('click', showLoginModalHandler);
    });
  }
})();

'use strict';

(function () {
  // main menu
  var header = document.querySelector('.page-header');
  var menuToggle = document.querySelector('#main-nav-toggle');

  var hideMenu = function () {
    if (header) {
      if (header.classList.contains('page-header--no-js')) {
        header.classList.remove('page-header--no-js');
      }
      if (header.classList.contains('page-header--nav-open')) {
        header.classList.remove('page-header--nav-open');
        header.classList.add('page-header--nav-closed');
      }
    }
  };

  var toggleMenu = function () {
    header.classList.toggle('page-header--nav-open');
    header.classList.toggle('page-header--nav-closed');
  };

  hideMenu();
  menuToggle.addEventListener('click', toggleMenu);
})();

'use strict';

// product card tabs
(function () {
  if (document.querySelector('.product__tab-btn')) {
    var tabBtns = document.querySelectorAll('.product__tab-btn');
    var tabPanels = document.querySelectorAll('.product__tab');
    var tabName;

    var switchTabHandler = function () {
      tabBtns.forEach(function (btn) {
        btn.classList.remove('product__tab-btn--current');
      });
      this.classList.add('product__tab-btn--current');
      tabName = this.getAttribute('data-tab-name');
      showTabPanel();
    };

    var showTabPanel = function () {
      tabPanels.forEach(function (panel) {
        if (panel.classList.contains(tabName)) {
          panel.classList.add('product__tab--current');
        } else {
          panel.classList.remove('product__tab--current');
        }
      });
    };

    tabBtns.forEach(function (btn) {
      btn.addEventListener('click', switchTabHandler);
    });
  }
})();

'use strict';

(function () {
  // add focus state to search-inputs
  var formsOnLightBg = document.querySelectorAll('.search-form--on-light-bg');
  var formsOnDarkBg = document.querySelectorAll('.search-form--on-dark-bg');

  var toggleBackground = function () {
    if (formsOnLightBg) {
      formsOnLightBg.forEach(function (form) {
        var inputSearch = form.querySelector('input[type="search"]');
        var container = inputSearch.closest('.search-form__bg');

        inputSearch.addEventListener('focus', function () {
          container.classList.add('search-form__bg--on-light');
        });

        inputSearch.addEventListener('blur', function () {
          container.classList.remove('search-form__bg--on-light');
        });
      });
    }

    if (formsOnDarkBg) {
      formsOnDarkBg.forEach(function (form) {
        var inputSearch = form.querySelector('input[type="search"]');
        var container = inputSearch.closest('.search-form__bg');

        inputSearch.addEventListener('focus', function () {
          container.classList.add('search-form__bg--on-dark');
        });

        inputSearch.addEventListener('blur', function () {
          container.classList.remove('search-form__bg--on-dark');
        });
      });
    }
  };

  toggleBackground();
})();

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

'use strict';

(function () {
  var HTML = document.querySelector('html');
  var body = document.querySelector('body');
  var shift = window.innerWidth - document.body.offsetWidth;

  var showModal = function (el) {
    if (body.offsetHeight > window.innerHeight) {
      body.classList.add('js-no-scroll');
    }

    body.style = 'margin-left: ' + -shift + 'px';
    HTML.style.scrollBehavior = 'auto';

    if (el) {
      el.classList.add('js-display-block');
    }

  };

  var hideModal = function (el) {
    if (el) {
      el.classList.remove('js-display-block');
    }

    if (body.offsetHeight > window.innerHeight) {
      body.classList.remove('js-no-scroll');
      document.body.style = 'margin-left: ""';
      HTML.style.scrollBehavior = '';
    }
  };

  window.utils = {
    'showModal': showModal,
    'hideModal': hideModal,
  };
})();
