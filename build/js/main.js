'use strict';

(function () {
  var accordionBlocks = document.querySelectorAll('.accordion__item');
  var accordionBlockHeaders = document.querySelectorAll('.accordion__item-header');

  var hideBlocks = function (blocks) {
    blocks.forEach((item) => item.closest('.accordion__item').classList.add('accordion__item--hidden'));
  };

  var removeActiveBlock = function (blocks) {
    if (blocks.length > 0) {
      blocks.forEach((block) => {
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
  accordionBlockHeaders.forEach((item) => item.addEventListener('click', changeActiveBlockHandler));
})();


// 'use strict';

// (function () {

//   // нужна проверка существует ли на странице openLoginModalBtns????
//   // login-form modal
//   var openLoginModalBtns = document.querySelectorAll('.js-login');

//   var overlay = document.querySelector('#overlay-login');
//   var closeLoginModalBtn = overlay.querySelector('.js-close');
//   var form = overlay.querySelector('form');
//   var userEmail = form.querySelector('.js-email');
//   var userPassword = form.querySelector('.js-password');

//   var isStorageSupport = true;
//   var storage = '';

//   var showLoginModalHandler = function (evt) {
//     evt.preventDefault();

//     window.utils.showModal(overlay);

//     if (userEmail.value) {
//       userPassword.focus();
//     } else {
//       userEmail.focus();
//     }

//     form.addEventListener('submit', submitHandler);
//     closeLoginModalBtn.addEventListener('click', hideLoginModalHandler);
//     overlay.addEventListener('click', overlayPressHandler);
//     document.addEventListener('keydown', escPressHandler);
//   };

//   var hideLoginModalHandler = function () {
//     closeLoginModalBtn.removeEventListener('click', hideLoginModalHandler);
//     overlay.removeEventListener('click', overlayPressHandler);
//     document.removeEventListener('keydown', escPressHandler);

//     window.utils.hideModal(overlay);
//   }

//   var escPressHandler = function (evt) {
//     if (evt.key === 'Escape') {
//       window.utils.hideModal(overlay);
//     }
//   };

//   var overlayPressHandler = function (evt) {
//     if (!evt.target.closest('.js-modal')) {
//       window.utils.hideModal(overlay);
//     }
//   };

//   var submitHandler = function () {
//     if (userEmail && isStorageSupport) {
//       localStorage.setItem('email', email.value);
//     }
//   };

//   try {
//     storage = localStorage.getItem('email');
//   } catch (err) {
//     isStorageSupport = false;
//   }

//   if (storage) {
//     userEmail.value = localStorage.getItem('email');
//   }

//   // if (openLoginModalBtns.length > 0) {
//   openLoginModalBtns.forEach(btn => btn.addEventListener('click', showLoginModalHandler));
//   // }
// })();

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

(function () {
  // add focus state to search-inputs
  var formsOnLightBg = document.querySelectorAll('.search-form--on-light-bg');
  var formsOnDarkBg = document.querySelectorAll('.search-form--on-dark-bg');

  var toggleBackground = function () {
    if (formsOnLightBg) {
      formsOnLightBg.forEach((form) => {
        var inputSearch = form.querySelector('input[type="search"]');
        var container = inputSearch.closest('.search-form__bg');

        inputSearch.addEventListener('focus', () => {
          container.classList.add('search-form__bg--on-light');
        })

        inputSearch.addEventListener('blur', () => {
          container.classList.remove('search-form__bg--on-light');
        })
      })
    }

    if (formsOnDarkBg) {
      formsOnDarkBg.forEach((form) => {
        var inputSearch = form.querySelector('input[type="search"]');
        var container = inputSearch.closest('.search-form__bg');

        inputSearch.addEventListener('focus', () => {
          container.classList.add('search-form__bg--on-dark');
        })

        inputSearch.addEventListener('blur', () => {
          container.classList.remove('search-form__bg--on-dark');
        })
      })
    }
  }

  toggleBackground();
})();

// 'use strict';

// (function () {
//   // slider
//   var slider = document.querySelector('.slider');
//   var sliderContent = document.querySelector('.slider__list');
//   var scrollLeftBtn = document.querySelector('.slider__control--previous');
//   var scrollRightBtn = document.querySelector('.slider__control--next');

//   scrollLeftBtn.onclick = function () {
//     slider.style.background = "red";
//     console.log('works')
//   }

//   scrollRightBtn.onclick = function () {
//     sliderContent.style.background = "yellow";
//     console.log('works')
//   }
//   // var hideMenu = function () {
//   //   if (header) {
//   //     if (header.classList.contains('page-header--no-js')) {
//   //       header.classList.remove('page-header--no-js')
//   //     };
//   //     if (header.classList.contains('page-header--nav-open')) {
//   //       header.classList.remove('page-header--nav-open');
//   //       header.classList.add('page-header--nav-closed');
//   //     };
//   //   }
//   // };

//   // var toggleMenu = function () {
//   //   header.classList.toggle('page-header--nav-open');
//   //   header.classList.toggle('page-header--nav-closed');
//   // };

//   // hideMenu();
//   // menuToggle.addEventListener('click', toggleMenu);
// })();

'use strict';

(function () {
  var HTML = document.querySelector('html');
  var body = document.querySelector('body');

  var showModal = function (el) {
    if (body.offsetHeight > window.innerHeight) {
      body.dataset.scrollY = self.pageYOffset;
      body.style.top = document.body.dataset.scrollY * -1 + 'px';
      body.classList.add('js-no-scroll');
    }

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
      body.style.top = 0;
      HTML.style.scrollBehavior = 'auto';
      window.scrollTo(0, document.body.dataset.scrollY);
      HTML.style.scrollBehavior = 'smooth';
    }
  };

  window.utils = {
    'showModal': showModal,
    'hideModal': hideModal,
  };
})();
