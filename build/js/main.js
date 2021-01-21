'use strict';

(function () {
  // main menu
  var header = document.querySelector('.page-header');
  var menuToggle = document.querySelector('#main-nav-toggle');

  var hideMenu = function () {
    if (header) {
      if (header.classList.contains('page-header--no-js')) {
        header.classList.remove('page-header--no-js')
      };
      if (header.classList.contains('page-header--nav-open')) {
        header.classList.remove('page-header--nav-open');
        header.classList.add('page-header--nav-closed');
      };
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
