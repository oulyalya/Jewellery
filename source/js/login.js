'use strict';

(function () {
  // login-form modal
  if (document.querySelectorAll('.js-login')) {
    var openLoginModalBtns = document.querySelectorAll('.js-login');

    var overlay = document.querySelector('#overlay-login');

    var isStorageSupport = true;
    var storage = '';

    if (document.querySelector('#overlay-login form')) {
      var closeLoginModalBtn = overlay.querySelector('.js-close');
      var form = overlay.querySelector('form');
      var userEmail = form.querySelector('.js-email');
      var userPassword = form.querySelector('.js-password');
    }

    var showLoginModalHandler = function (evt) {
      evt.preventDefault();

      window.utils.showModal(overlay);

      if (storage) {
        userEmail.value = localStorage.getItem('email');
      }

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

    openLoginModalBtns.forEach(function (btn) {
      btn.addEventListener('click', showLoginModalHandler);
    });
  }
})();
