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
