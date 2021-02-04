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
