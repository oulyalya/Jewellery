'use strict';

(function () {
  // added to cart modal
  if (document.querySelector('.js-to-cart')) {
    var toCartBtn = document.querySelector('.js-to-cart');
    var overlay = document.querySelector('#overlay-added');

    var showModalHandler = function (evt) {
      var closeModalBtn = overlay.querySelector('.js-close');

      evt.preventDefault();

      window.utils.showModal(overlay);

      closeModalBtn.addEventListener('click', hideModalHandler);
      overlay.addEventListener('click', overlayPressHandler);
      document.addEventListener('keydown', escPressHandler);
    };

    var hideModalHandler = function () {
      var closeModalBtn = overlay.querySelector('.js-close');

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
