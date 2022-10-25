'use strict';

document.addEventListener("DOMContentLoaded", function(){
    // Login modal
    const loginBtn = document.querySelector('.util-area .login a');
    const loginModal = document.querySelector('.login-modal-wrap');
    const modalCloseBtn = loginModal.querySelector('.close');
    loginBtn.addEventListener('click',function(e){
        e.preventDefault();
        loginModal.classList.add('on');
    });
    modalCloseBtn.addEventListener('click', function(){
        loginModal.classList.remove('on');
    })

    // Happy Talk btn click event
    const happyTalkBtn = document.querySelector('.happy-talk');
    const happyTalkArea = document.querySelector('.happy-talk-area');
    const happyTalkClose = document.querySelector('.happy-talk-area .close');
    happyTalkBtn.addEventListener('click',function(){
        happyTalkArea.classList.toggle('on');
    });
    happyTalkClose.addEventListener('click', function(){
        happyTalkArea.classList.remove('on');
    });

    // Top btn click event
    const topBtn = document.querySelector('.top-btn');
    topBtn.addEventListener('click', function(e){
        e.preventDefault();
        window.scrollTo({top:0, behavior:"smooth"});
    });

    // Main-nav → Sub-nav show/hidden
    const areaBtn = document.querySelectorAll('.area > li > a');
    const subNavArea = document.querySelectorAll('.sub-nav-area');
    for(let i = 0; i < areaBtn.length; i++){
        areaBtn[i].addEventListener('mouseover',function(){
            subNavArea[i].classList.remove('show');
            this.nextElementSibling.classList.add('show');
        });
        areaBtn[i].addEventListener('mouseout',function(){
            this.nextElementSibling.classList.remove('show');
        });
        subNavArea[i].addEventListener('mouseover',function(){
            subNavArea[i].classList.remove('show');
            this.classList.add('show');
        });
        subNavArea[i].addEventListener('mouseout',function(){
            this.classList.remove('show');
        });
    }
    
    // Nav area (header-bottom) Position Fixed
    document.addEventListener('scroll', function() {
        let currentScrollValue = document.documentElement.scrollTop;
        const navArea = document.querySelector('.header-bottom');
        if(currentScrollValue > 141){
            navArea.classList.add('on');
        }else{
            navArea.classList.remove('on');
        };
    });

    // 일반배송 & 새벽배송 화면 toggle
    const cartBtn = document.querySelectorAll('.cart-btn button')
    const cartBox = document.querySelectorAll('.cart-box');
    cartBtn.forEach(function(item, index){
      item.addEventListener('click', function(){
        cartBox.forEach(function(i){
          i.classList.remove('on');
        });
        cartBox[index].classList.add('on');
        cartBtn.forEach(function(i){
          i.classList.remove('on');
        })
        item.classList.add('on');
      });
    });

    // Footer area family brand toggle
    const familyTitle = document.querySelector('.footer-right .title');
    const optionArea = document.querySelector('.footer-right .option');
    familyTitle.addEventListener('click', function(){
        optionArea.classList.toggle('on');
    });

  });