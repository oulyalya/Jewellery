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

