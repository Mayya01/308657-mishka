var catalogBasket=document.querySelectorAll('.catalog-item__btn-basket');
var modal = document.querySelector('.modal-size');
var moduleBtn = document.querySelector('.modal-size__btn');
var modalOverlay=document.querySelector('.modal-overlay');
modal.classList.remove('modal-size--nojs');

for(var i=0; i<catalogBasket.length; i++) {
  catalogBasket[i].addEventListener('click', function(evt){
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
}
moduleBtn.addEventListener('click', function(evt) {
      evt.preventDefault();
      modal.classList.remove('modal-size--open');
      modal.classList.add('modal-size--close');
      modalOverlay.classList.remove('modal-overlay--open');
      modalOverlay.classList.add('modal-overlay--close');
});
