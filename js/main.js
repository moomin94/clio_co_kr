'use strict';

document.addEventListener("DOMContentLoaded", function () {

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
    function moveSlide() {
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

    // next 버튼 클릭시 오른쪽으로 이동
    nextBtn.addEventListener("click", function () {
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
    playPauseBtn.addEventListener('click', function () {
        if (this.className == 'fa-solid fa-pause') {
            this.className = 'fa-solid fa-play';
            clearInterval(autoSlide);
        } else {
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
    function showTime() {
        let stDate = new Date().getTime();
        let edDate = new Date('2022-12-07 00:00:00').getTime();
        let remainDate = edDate - stDate;
        let hours = Math.floor(remainDate / (1000 * 60 * 60));
        let minutes = Math.floor((remainDate % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((remainDate % (1000 * 60)) / (1000));
        hr.innerText = String(hours).padStart(2, '0');
        min.innerText = String(minutes).padStart(2, '0');
        sec.innerText = String(seconds).padStart(2, '0');
    }
    showTime();
    setInterval(showTime, 1000);

    // Best & New product area
    const productBtn = document.querySelectorAll('.product-btn');
    const productList = document.querySelectorAll('.product-list');
    for (let i = 0; i < productBtn.length; i++) {
        productBtn[i].addEventListener('click', function () {
            for (let j = 0; j < productBtn.length; j++) {
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
    for (let i = 0; i < onlineBtn.length; i++) {
        onlineBtn[i].addEventListener('click', function () {
            for (let j = 0; j < onlineBtn.length; j++) {
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
    for (let i = 0; i < popularBtn.length; i++) {
        popularBtn[i].addEventListener('click', function () {
            for (let j = 0; j < popularBtn.length; j++) {
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
    reviewNext.addEventListener("click", function () {
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
            reviewCount = reviewItem.length - reviewCount - 1;
            reviewSlide.style.transform = "translateX(" + -reviewSize * reviewCount + "%)";
        }
    });
});
