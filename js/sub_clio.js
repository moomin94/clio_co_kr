'use strict';

document.addEventListener("DOMContentLoaded", function(){
    const sortBtn = document.querySelector('.sort-wrap > a');
    const sortList = document.querySelector('.sort-wrap ul');
    sortBtn.addEventListener('click', function(e){
        e.preventDefault();
        sortList.classList.toggle('on');
    })
});