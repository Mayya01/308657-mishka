'use strict';
var mainNav = document.querySelector('.main-navigation');
var navToggler = document.querySelector('.main-navigation__toggler');
var popularItemBtn = document.querySelector('.popular-item__btn');
var modal = document.querySelector('.modal-size');
var moduleBtn = document.querySelector('.modal-size__btn');
var modalOverlay=document.querySelector('.modal-overlay');

mainNav.classList.remove('main-navigation--nojs');
navToggler.addEventListener('click', function() {
  if (mainNav.classList.contains('main-navigation--opened')) {
    mainNav.classList.remove('main-navigation--opened');
    navToggler.classList.remove('main-navigation__toggler--open');
    navToggler.classList.add('main-navigation__toggler--close');
    mainNav.classList.add('main-navigation--closed');
  } else {
    mainNav.classList.remove('main-navigation--closed');
    navToggler.classList.remove('main-navigation__toggler--close');
    navToggler.classList.add('main-navigation__toggler--open');
    mainNav.classList.add('main-navigation--opened');
  }
});
modal.classList.remove('modal-size--nojs');
popularItemBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    if(modal.classList.contains('modal-size--close') && modalOverlay.classList.contains('modal-overlay--close')) {
        modal.classList.remove('modal-size--close');
        modalOverlay.classList.remove('modal-overlay--close');
        modal.classList.add('modal-size--open');
        modalOverlay.classList.add('modal-overlay--open');
    } else {
        modal.classList.contains('modal-size--open');
        modalOverlay.classList.contains('modal-overlay--open');
        modal.classList.remove('modal-size--open');
        modal.classList.add('modal-size--close');
        modalOverlay.classList.remove('modal-overlay--open');
        modalOverlay.classList.add('modal-overlay--close');
    }
});
moduleBtn.addEventListener('click', function(evt) {
      evt.preventDefault();
      modal.classList.remove('modal-size--open');
      modal.classList.add('modal-size--close');
      modalOverlay.classList.remove('modal-overlay--open');
      modalOverlay.classList.add('modal-overlay--close');
});
