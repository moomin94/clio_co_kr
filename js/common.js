'use strict';

document.addEventListener("DOMContentLoaded", function(){
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
        let i = document.documentElement.scrollTop;
        let int = setInterval(function() {
          window.scrollTo(0, i);
          i -= 50;
          if (i < 0) clearInterval(int);
        }, 1);
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

    // Main img area
    const slideBox = document.querySelector('.main-img-wrap');
    const slideItem = document.querySelectorAll('.slide-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const playPauseBtn = document.querySelector('.play-pause-btn button i');
    const pageNow = document.querySelector('.now');

    let counter = 1;
    const size = 100 / 6;
    slideBox.style.transform = 'translateX(' + -size * counter + '%)';
    
    // slide 오른쪽으로 이동
    function moveSlide(){
        if (counter >= slideItem.length - 1) return;
        slideBox.style.transition = "transform 0.4s ease-in-out";
        counter++;
        pageNow.innerText = counter;
        slideBox.style.transform = "translateX(" + -size * counter + "%)";
        if (slideItem[counter].id === "first-clone") {
            pageNow.innerText = 1;
        };
    };
    
    // 3.5초마다 자동으로 오른쪽으로 이동
    let autoSlide = setInterval(moveSlide, 3500);
    
    // 이미지에 마우스 올렸을 때는 자동으로 이동하지 않기
    slideBox.addEventListener('mouseover', function(){
        clearInterval(autoSlide);
    });

    // 이미지에서 마우스 내렸을 때 자동으로 이동하기
    slideBox.addEventListener('mouseout', function(){
        autoSlide = setInterval(moveSlide, 3500);
    });

    // next 버튼 클릭시 오른쪽으로 이동
    nextBtn.addEventListener("click", function(){
        clearInterval(autoSlide);
        moveSlide();
    });
    
    // prev 버튼 클릭시 왼쪽으로 이동
    prevBtn.addEventListener("click", () => {
        clearInterval(autoSlide);
        if (counter <= 0) return;
        slideBox.style.transition = "transform 0.4s ease-in-out";
        counter--;
        pageNow.innerText = counter;
        slideBox.style.transform = "translateX(" + -size * counter + "%)";
        if (slideItem[counter].id === "last-clone") {
            pageNow.innerText = 4;
        };
    });

    // play, pause 버튼 클릭시 작동
    playPauseBtn.addEventListener('click', function(){
        if(this.className == 'fa-solid fa-pause'){
            this.className = 'fa-solid fa-play';
            clearInterval(autoSlide);
        }else{
            clearInterval(autoSlide);
            this.className = 'fa-solid fa-pause';
            autoSlide = setInterval(moveSlide, 3500);
        }
    });
    

    // 4번에서 1번, 1번에서 4번 이미지로 자연스럽게 넘어가기
    slideBox.addEventListener("transitionend", function () {
        if (slideItem[counter].id === "last-clone") {
          slideBox.style.transition = "none";
          counter = slideItem.length - 2;
          slideBox.style.transform = "translateX(" + -size * counter + "%)";
        }
        if (slideItem[counter].id === "first-clone") {
            slideBox.style.transition = "none";
            counter = slideItem.length - counter;
            slideBox.style.transform = "translateX(" + -size * counter + "%)";
        }
    });


    // Time Deal Area
    let hr = document.querySelector('.hr');
    let min = document.querySelector('.min');
    let sec = document.querySelector('.sec');
    function showTime(){
        let stDate = new Date().getTime();
        let edDate = new Date('2022-10-23 00:00:00').getTime();
        let remainDate = edDate - stDate;
        let hours = Math.floor(remainDate / (1000*60*60));
        let minutes = Math.floor((remainDate % (1000*60*60)) / (1000*60));
        let seconds = Math.floor((remainDate % (1000*60)) / (1000));
        hr.innerText = String(hours).padStart(2,'0');
        min.innerText = String(minutes).padStart(2,'0');
        sec.innerText = String(seconds).padStart(2,'0');
    }
    showTime();
    setInterval(showTime, 1000);

    // Best & New product area
    const productBtn = document.querySelectorAll('.product-btn');
    const productList = document.querySelectorAll('.product-list');
    for(let i = 0; i < productBtn.length; i++){
        productBtn[i].addEventListener('click',function(){
            for(let j = 0; j < productBtn.length; j++){
                productBtn[j].classList.remove('on');
                productList[j].classList.remove('on');
                this.classList.add('on');
                productList[i].classList.add('on');
            }
        });
    };

    // Online area
    const onlineBtn = document.querySelectorAll('.online-btn');
    const onlineInner = document.querySelectorAll('.online-inner');
    for(let i = 0; i < onlineBtn.length; i++){
        onlineBtn[i].addEventListener('click',function(){
            for(let j = 0; j < onlineBtn.length; j++){
                onlineBtn[j].classList.remove('on');
                onlineInner[j].classList.remove('on');
                this.classList.add('on');
                onlineInner[i].classList.add('on');
            }
        });
    };

    // Popular product area
    const popularBtn = document.querySelectorAll('.popular-btn');
    const popularList = document.querySelectorAll('.popular-wrap .product-list');
    for(let i = 0; i < popularBtn.length; i++){
        popularBtn[i].addEventListener('click',function(){
            for(let j = 0; j < popularBtn.length; j++){
                popularBtn[j].classList.remove('on');
                popularList[j].classList.remove('on');
                this.classList.add('on');
                popularList[i].classList.add('on');
            }
        });
    };

    // Review bottom area
    const reviewSlide = document.querySelector('.slide-wrap > ul');
    const reviewItem = document.querySelectorAll('.slide-wrap > ul > li');
    const reviewPrev = document.querySelector('.review-prev-btn');
    const reviewNext = document.querySelector('.review-next-btn');

    let reviewCount = 1;
    const reviewSize = 100 / 7;
    reviewSlide.style.transform = 'translateX(' + -reviewSize * reviewCount + '%)';

    // next 버튼 클릭시 오른쪽으로 이동
    reviewNext.addEventListener("click", function(){
        if (reviewCount > reviewItem.length - 1) return;
        reviewSlide.style.transition = "transform 0.5s ease-in-out";
        reviewCount++;
        reviewSlide.style.transform = "translateX(" + -reviewSize * reviewCount + "%)";
    });
    
    // prev 버튼 클릭시 왼쪽으로 이동
    reviewPrev.addEventListener("click", () => {
        if (reviewCount <= 0) return;
        reviewSlide.style.transition = "transform 0.5s ease-in-out";
        reviewCount--;
        reviewSlide.style.transform = "translateX(" + -reviewSize * reviewCount + "%)";
    });
    

    // 4번에서 1번, 1번에서 4번 이미지로 자연스럽게 넘어가기
    reviewSlide.addEventListener("transitionend", function () {
        if (reviewItem[reviewCount].id === "review-last") {
          reviewSlide.style.transition = "none";
          reviewCount = reviewItem.length - 2;
          reviewSlide.style.transform = "translateX(" + -reviewSize * reviewCount + "%)";
        }
        if (reviewItem[reviewCount].id === "review-first") {
            reviewSlide.style.transition = "none";
            reviewCount = reviewItem.length - reviewCount -1;
            reviewSlide.style.transform = "translateX(" + -reviewSize * reviewCount + "%)";
        }
    });

    // Footer area family brand toggle
    const familyTitle = document.querySelector('.footer-right .title');
    const optionArea = document.querySelector('.footer-right .option');
    familyTitle.addEventListener('click', function(){
        optionArea.classList.toggle('on');
    })

});