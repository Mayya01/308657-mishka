'use strict';

var mainNav=document.querySelector('.main-navigation');
var navToggler=document.querySelector('.main-navigation__toggler');

mainNav.classList.remove('main-navigation--nojs');

navToggler.addEventListener('click', function(){
    if(mainNav.classList.contains('main-navigation--opened')){
        mainNav.classList.remove('main-navigation--opened');
        mainNav.classList.add('main-navigation--closed');
    }else {
        mainNav.classList.remove('main-navigation--closed');
        mainNav.classList.add('main-navigation--opened');
    }
});
