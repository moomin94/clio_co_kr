'use strict';
document.addEventListener("DOMContentLoaded", function(){
  // Footer area family brand toggle
  const familyTitle = document.querySelector('.footer-right .title');
  const optionArea = document.querySelector('.footer-right .option');
  familyTitle.addEventListener('click', function(){
      optionArea.classList.toggle('on');
  });
});