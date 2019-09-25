'use strict';

(function () {
  var paymentItems = document.querySelectorAll('.payment__list-item');
  var deviceWidth = 320;

  var menuToggle = function () {
    if (!(window.screen.availWidth > 768) || !(window.innerWidth > 768)) {
      for (var i = 0; i < paymentItems.length; i++) {
        paymentItems[i].classList.remove('payment__list-item--active');
        paymentItems[i].addEventListener('click', onClickEvent);
      }
    } else {
      for (var i = 0; i < paymentItems.length; i++) {
        paymentItems[i].classList.add('payment__list-item--active');
        paymentItems[i].removeEventListener('click', onClickEvent);
      }
    }
  };

  var onClickEvent = function (evt) {
    if (evt.currentTarget.classList.contains('payment__list-item--active')) {
      evt.currentTarget.classList.remove('payment__list-item--active');
    } else {
    evt.currentTarget.classList.add('payment__list-item--active');
    }
  };

  window.addEventListener('resize', function () {
    menuToggle ();
  });

  menuToggle ();

  var enterMenuButtons = document.querySelectorAll('.header__user-menu-item--checked-out');
  var overlay = document.querySelector('.overlay');
  var enterMenuModal = document.querySelector('.modal-login');
  var modalCloseButton = enterMenuModal.querySelector('.modal-login__close-button');
  var checkedIn = false;

  var closeModal =function () {
    overlay.classList.add('overlay--hidden');
    enterMenuModal.classList.add('modal-login--hidden');
  }

  var openModal = function () {
    overlay.classList.remove('overlay--hidden');
    enterMenuModal.classList.remove('modal-login--hidden');
  }

  var onHelpClickEvent = function (evt) {
    if (!checkedIn) {
      evt.preventDefault();
      openModal();
      modalCloseButton.addEventListener('click', closeModal);
    }
  }

  for (var i = 0; i < enterMenuButtons.length; i++) {
    enterMenuButtons[i].addEventListener('click', onHelpClickEvent);
  }

  var helpMenuButton = document.querySelector('.header__help-button');
  var helpMenu = document.querySelector('.header__help-menu-wrapper');
  var helpMenuClosed = true;

  helpMenuButton.addEventListener('click', function () {
    if (helpMenuClosed) {
      helpMenuButton.classList.remove('header__help-button--closed');
      helpMenu.classList.remove('header__help-menu-wrapper--hidden');
      helpMenuClosed = false;
    } else {
      helpMenuButton.classList.add('header__help-button--closed');
      helpMenu.classList.add('header__help-menu-wrapper--hidden');
      helpMenuClosed = true;
    }
  });

  var topLine = document.querySelector('.header__top-line');

  window.addEventListener('scroll', function() {
    if (pageYOffset > 0) {
      topLine.classList.add('header__top-line--shadow');
    } else {
      topLine.classList.remove('header__top-line--shadow');
    }
  });
})();
