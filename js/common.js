'use strict';

document.addEventListener("DOMContentLoaded", function(){

    const areaBtn = document.querySelectorAll('.area > li > a');
    const subNavArea = document.querySelectorAll('.sub-nav-area');
    
    console.log(areaBtn);

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
    

});