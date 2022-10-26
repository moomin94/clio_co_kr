'use strict';
document.addEventListener("DOMContentLoaded", function(){
  // Login modal
  const mLoginBtn = document.querySelector('.top .login');
  const mLoginModal = document.querySelector('.m-login-modal-wrap');
  const mLoginTabBtn = document.querySelectorAll('.login-box .btn-wrap button');
  const mLoginTab = document.querySelectorAll('.login-box .tab');
  const loginBtn = document.querySelector('.util-area .login a');
  const loginModal = document.querySelector('.login-modal-wrap');
  const modalCloseBtn = loginModal.querySelector('.close');
  const mModalCloseBtn = mLoginModal.querySelector('.close i');
  mLoginBtn.addEventListener('click', function(e){
      e.preventDefault();
      mLoginModal.classList.add('on');
      document.body.style.overflow = 'hidden';
  });
  mLoginTabBtn.forEach(function(item,index){
      item.addEventListener('click', function(){
          mLoginTabBtn.forEach(function(i){
              i.classList.remove('on');
          })
          this.classList.add('on');
          mLoginTab.forEach(function(i){
              i.classList.remove('on');
          })
          mLoginTab[index].classList.add('on');
      })
  });
  loginBtn.addEventListener('click',function(e){
      e.preventDefault();
      loginModal.classList.add('on');
  });
  mModalCloseBtn.addEventListener('click', function(){
      mLoginModal.classList.remove('on');
      document.body.style.overflow = 'auto';
  });
  modalCloseBtn.addEventListener('click', function(){
      loginModal.classList.remove('on');
  });

  // Footer area family brand toggle
  const familyTitle = document.querySelector('.footer-right .title');
  const optionArea = document.querySelector('.footer-right .option');
  familyTitle.addEventListener('click', function(){
      optionArea.classList.toggle('on');
  });
});