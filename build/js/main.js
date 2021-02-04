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
    }

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
        localStorage.setItem('email', email.value);
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

    openLoginModalBtns.forEach(btn => btn.addEventListener('click', showLoginModalHandler));
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

// 'use strict';

// (function () {
//   if (document.querySelector('.product')) {
//     var productCard = document.querySelector('.product');
//     var descriptionBtn = productCard.querySelector('.product__tab-btn--description');
//     var featuresBtn = productCard.querySelector('.product__tab-btn--features');
//     var descriptionTab = productCard.querySelector('.product__tab--description');
//     var featuresTab = productCard.querySelector('.product__tab--features');

//     var productInfo = {
//       descriptionBtn: 'descriptionTab',
//       featuresBtn: 'featuresTab',
//     }


//     // on button product__tab-btn--current
//     //  on tab product__tab--current

//     var switchTab = function (btn) {
//       btn.onclick = function () {

//         var currentTab = productInfo[btn];
//         // productInfo[btn].classList.add('product__tab--current');
//         btn.style.background = 'red';
//         console.log(productInfo[btn]);
//         console.log(btn);
//         console.log('1')
//       }
//     }

//     switchTab(descriptionBtn);
//     switchTab(featuresBtn)


//     productInfo.forEach((btn) => switchTab(btn));
//   }
// })();

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
if (document.querySelector('.slider__wrapper')) {
  var slider = document.querySelector('.slider');
  var sliderFrame = slider.querySelector('.slider__wrapper');
  var sliderContent = slider.querySelector('.slider__slides');
  var sliderCard = slider.querySelector('.slider__card');
  var gap = 30;


  var sliderCards = slider.querySelectorAll('.slider__card');


  var leftBtn = slider.querySelector('.slider__btn--previous');
  var rightBtn = slider.querySelector('.slider__btn--next');

  // var width = sliderFrame.offsetWidth;


  var defineDevice = function () {
    var width = document.querySelector('.container').offsetWidth;
    var device = '';

    switch (true) {
      case width >= 1023:
        device = 'desktop'
        break;
      case width >= 768 && width <= 1022:
        device = 'tablet'
        break;
      case width >= 320 && width <= 767:
        device = 'mobile'
        break;
    }

    // document.querySelector('.check').onclick = () => {
    // console.log(width)
    // console.log(device)
    // }
    return device;
  }

  var defineMaxProducts = function () {
    var device = defineDevice();
    var maxProducts;

    switch (true) {
      case device === 'desktop':
        maxProducts = 4;
        break;
      case device === 'tablet':
        maxProducts = 2;
        break;
      case device === 'mobile':
        maxProducts = 2;
        break;
    }
    // console.log(maxProducts)
    return maxProducts;
  }

  var showNextSlide = function () {
    var cardsPerSlide = defineMaxProducts();
    var cardWidth = sliderCard.offsetWidth;

    var sliderContentWidth = sliderCards.length * cardWidth + ((cardsPerSlide - 1) * gap);

    // допускает значение с половиной
    var slidesQuantity = sliderCards.length / cardsPerSlide;
    // количество полных слайдов (то есть тех, где карточек 2 из 2х или 4 из 4х)
    var fullSlidesQuantity = Math.floor(slidesQuantity);

    // var currentSlide = position / slideWidth;
    // currentSlide = Math.abs(currentSlide)
    // (если текущий слайд == фул слайдз квонтити, то на след клике шивт равен нескольким карточкам, а  не целому слайду)

    // if (sliderCards.length % cardsPerSlide == 0) {
    // slidesQuantity = sliderCards.length % cardsPerSlide;
    // console.log(slidesQuantity + ' slidesQuantity')
    // console.log(currentSlide + ' currentSlide')
    // }


    // var frameWidth = sliderFrame.offsetWidth;

    var slideWidth = (cardsPerSlide * cardWidth) + (cardsPerSlide * gap);

    var shift = slideWidth;
    var maxLeft = slidesQuantity * slideWidth;

    // // проверка четко ли по количесвтву карточек
    // if (sliderCards.length % cardsPerSlide === 0) {
    //   console.log('четко')
    //   shift = slideWidth;
    //   // шифт = slideWidth
    //   // сдвигаем на целый слайд
    // } else {
    //   // if (position == (sliderContentWidth - strayCards * cardWidth + strayCards * gap)) {
    //   console.log('остаток')
    //   var strayCards = sliderCards.length - (cardsPerSlide * Math.floor(slidesQuantity));
    //   shift = strayCards * cardWidth + strayCards * gap;
    //   // если остаток ширины контента меньше ширины слайда,
    //   // сдвигаем на остаток карточек
    //   // }
    // }


    // var position = sliderContent.offsetLeft;

    // if ((slideWidth * slidesQuantity + sliderCards.length * gap) == sliderContentWidth) {
    //   console.log(1111)
    // }

    // console.log((slideWidth * slidesQuantity + (sliderCards.length - 1) * gap))
    var position = sliderContent.offsetLeft;
    position = Math.abs(position);
    // console.log(currentSlide + ' currentSlide')


    // right
    if (position < maxLeft - slideWidth) {
      console.log(1)
      sliderContent.style.left = `-${position += shift}px`;
      // console.log(sliderContent)
      console.log(position + 'pos')
      console.log(shift + 'wdt')
    }
    else {
      console.log(11)
      sliderContent.style.left = 0;

    }








    // var currentSlide = (position + slideWidth) / (sliderFrame.offsetWidth + gap);
    // // currentSlide = Math.abs(currentSlide)
    // // (если текущий слайд == фул слайдз квонтити, то на след клике шивт равен нескольким карточкам, а  не целому слайду)

    // // if (sliderCards.length % cardsPerSlide == 0) {
    // // slidesQuantity = sliderCards.length % cardsPerSlide;
    // // console.log(slidesQuantity + ' slidesQuantity')
    // console.log(currentSlide + ' currentSlide')
    // console.log(`${sliderContent.offsetWidth} / ${position}`)
    // console.log(typeof position)
    // // }

    // sliderContent.style.transform = `translateX(-${shift}px)`;
    // sliderContent.style.left = sliderContent.offsetLeft += shift
    // sliderContent.style.left = `-${position += shift}px`;

    // `-${sliderContent.offsetLeft + shift}px`;
    // sliderContent.style.left = `-${shift}px`;
    // console.log(position)

    // sliderFrame.style.border = "14px solid purple"
    // sliderContent.style.background = "red"
    // return amount;
  }


  var showPreviousSlide = function () {
    var cardsPerSlide = defineMaxProducts();
    var cardWidth = sliderCard.offsetWidth;

    // var sliderContentWidth = sliderCards.length * cardWidth + ((cardsPerSlide - 1) * gap);

    // допускает значение с половиной
    var slidesQuantity = sliderCards.length / cardsPerSlide;
    // количество полных слайдов (то есть тех, где карточек 2 из 2х или 4 из 4х)
    var fullSlidesQuantity = Math.floor(slidesQuantity);


    // var frameWidth = sliderFrame.offsetWidth;

    var slideWidth = (cardsPerSlide * cardWidth) + (cardsPerSlide * gap);

    var shift = slideWidth;
    var maxLeft = cardWidth * (sliderCards.length - cardsPerSlide) + gap * (sliderCards.length - cardsPerSlide);

    var position = sliderContent.offsetLeft;
    position = Math.abs(position);

    if (position == 0) {
      sliderContent.style.left = `-${maxLeft}px`;
    }
    else {
      sliderContent.style.left = `-${position -= shift}px`;
    }
  }


  var windowChangeHandler = function () {
    var device = defineDevice();

    var cardsPerSlide = defineMaxProducts();
    var cardWidth = sliderCard.offsetWidth;
    var slidesQuantity = sliderCards.length / cardsPerSlide;
    var slideWidth = (cardsPerSlide * cardWidth) + (cardsPerSlide * gap);
    var position = sliderContent.offsetLeft;
    position = Math.abs(position);
    console.log(position);
    // console.log(slideWidth);
    // console.log(slidesQuantity);


    var check;
    var shift;
    // if (device == 'desktop') {
    // check = position - ((cardWidth + gap) * cardsPerSlide);
    if (device == 'mobile' && position % ((cardWidth + gap) * 2) == 0
      || device == 'tablet' && position % ((cardWidth + gap) * 2) == 0
      || device == 'desktop' && position % ((cardWidth + gap) * 4) == 0) {
      // shift = 0;
      // }
    } else {

      // var fullSlides = position / ((cardWidth + gap) * cardsPerSlide);
      shift = position - fullSlides;
      // var difference = position - fullSlides;
      // position += difference;
      console.log(fullSlides, 222222222222222222)

    }
    // // sliderContent.style.left = `${check}px`;
    console.log(`${(sliderContent.offsetWidth - position) - (cardWidth + gap) * cardsPerSlide} (cardWidth + gap) * cardsPerSlide gjp`)
    // sliderContent.style.left = `-${shift}px`;
    console.log(shift)


    // position - целые слайды , остается куксочек, на жтот кусочек - смешение
  }

  window.addEventListener('resize', windowChangeHandler)
  document.querySelector('.check').onclick = defineMaxProducts;
  leftBtn.onclick = showPreviousSlide;
  rightBtn.onclick = showNextSlide;
}
  // var slides;
  // var count = slides.length

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

// при изменении ширины окна позишн минус слайд Видтх пока реузльтат больше нуля. позишен = позишен минус остаток

'use strict';

(function () {
  var HTML = document.querySelector('html');
  var body = document.querySelector('body');
  var shift = window.innerWidth - document.body.offsetWidth;

  var showModal = function (el) {
    if (body.offsetHeight > window.innerHeight) {
      body.classList.add('js-no-scroll');
    }

    body.style = `margin-left: -${shift}px`;

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
      document.body.style = "margin-left: 0";

      HTML.style.scrollBehavior = 'auto';
      HTML.style.scrollBehavior = 'smooth';
    }
  };

  window.utils = {
    'showModal': showModal,
    'hideModal': hideModal,
  };
})();
