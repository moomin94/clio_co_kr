'use strict';

document.addEventListener("DOMContentLoaded", function(){
    // Mobile gnb toggle
    const mGnbBtn = document.querySelector('.m-menu .gnb');
    const mGnbWrap = document.querySelector('.m-gnb-wrap');
    const mGnbCon = document.querySelector('.m-gnb-con');
    const categoryBtn = document.querySelectorAll('.category-btn');
    const categoryWrap = document.querySelectorAll('.category-list');
    const mGnbCloseBtn = document.querySelector('.m-gnb-con .close');
    mGnbBtn.addEventListener('click', function(){
        mGnbWrap.classList.add('on');
        mGnbCon.classList.add('on');
        document.body.style.overflow = 'hidden';
    });

    categoryBtn.forEach(function(item, index){
        item.addEventListener('click', function(){
            categoryBtn.forEach(function(i){
                i.classList.remove('on');
            });
            categoryWrap.forEach(function(i){
                i.classList.remove('on');
            });
            item.classList.add('on');
            categoryWrap[index].classList.add('on');
        });
    });

    mGnbCloseBtn.addEventListener('click', function(){
        mGnbWrap.classList.remove('on');
        mGnbCon.classList.remove('on');
        document.body.style.overflow = 'auto';
    });

    // Login modal
    const mLoginBtn = document.querySelector('.m-menu .login');
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
    })
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

    // Footer area family brand toggle
    const familyTitle = document.querySelector('.footer-right .title');
    const optionArea = document.querySelector('.footer-right .option');
    familyTitle.addEventListener('click', function(){
        optionArea.classList.toggle('on');
    })

});