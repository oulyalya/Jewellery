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

    toCartBtn.addEventListener('click', showModalHandler);
  }
})();
