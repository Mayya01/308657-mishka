'use strict';
var mainNav = document.querySelector('.main-navigation');
var navToggler = document.querySelector('.navigation-toggler');

mainNav.classList.remove('main-navigation--nojs');
navToggler.addEventListener('click', function() {
  if (mainNav.classList.contains('main-navigation--opened')) {
    mainNav.classList.remove('main-navigation--opened');
    navToggler.classList.remove('navigation-toggler--open');
    navToggler.classList.add('navigation-toggler--close');
    mainNav.classList.add('main-navigation--closed');
  } else {
    mainNav.classList.remove('main-navigation--closed');
    navToggler.classList.remove('navigation-toggler--close');
    navToggler.classList.add('navigation-toggler--open');
    mainNav.classList.add('main-navigation--opened');
  }
});
