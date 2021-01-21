'use strict';

(function () {
  // adds background to search-inputs on white
  var forms = document.querySelectorAll('.search-form--on-light-bg');

  // var addBackground = function(el){
  //   el.classList.add('search-form__bg--on-light');
  // };

  // var removeBackground = function(el){
  //   el.classList.remove('search-form__bg--on-light');
  // };

  var toggleBackground = function () {
    if (forms) {
      forms.forEach((form) => {
        var inputSearch = form.querySelector('input[type="search"]');
        var container = inputSearch.closest('.search-form__bg')
        inputSearch.addEventListener('focus', () => {
          container.classList.add('search-form__bg--on-light');
        })

        inputSearch.addEventListener('blur', () => {
          container.classList.remove('search-form__bg--on-light');
        })
      })
    }
  }
  toggleBackground();
})();
