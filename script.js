const buttonLeft = document.getElementById('left');
const buttonRight = document.getElementById('right');
const slidesLine = document.getElementById('slidesLine');
const countContain = document.getElementById('countContain');
 const colslides = 4;

 let i = 0;
  buttonLeft.addEventListener('click' ,function() {
 if(!(i == 0)) {
    i++;
    countContain.innerText = -i + 1;
    slidesLine.style.left = `${80 * i}vw`;
    slidesLine.style.animation = 'animate 0.2s';
    setTimeout(function(){
        slidesLine.style.animation = '0';

    }, 300)
 }
  })
 
  buttonRight.addEventListener('click' , function() {
    if (!(-i == colslides - 1)) {
       i--;
       countContain.innerText = -i + 1;
       slidesLine.style.left = `${80 * i}vw`;
       slidesLine.style.animation = 'animate 0.2s';
       setTimeout(function(){
           slidesLine.style.animation = '0';
    }, 300)
    }
     })
