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
