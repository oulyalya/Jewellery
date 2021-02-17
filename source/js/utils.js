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
