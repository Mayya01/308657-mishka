'use strict';

var mainNav=document.querySelector('.main-navigation');
var navToggler=document.querySelector('.main-navigation__toggler');


mainNav.classList.remove('main-navigation--nojs');

navToggler.addEventListener('click', function(){
    if(mainNav.classList.contains('main-navigation--opened')){
        mainNav.classList.remove('main-navigation--opened');
        navToggler.classList.remove('main-navigation__toggler--open');
        navToggler.classList.add('main-navigation__toggler--close');
        mainNav.classList.add('main-navigation--closed');
    }else {
        mainNav.classList.remove('main-navigation--closed');
        navToggler.classList.remove('main-navigation__toggler--close');
        navToggler.classList.add('main-navigation__toggler--open');
        mainNav.classList.add('main-navigation--opened');
    }
});


