const btn = document.querySelector('.toggle');
const menu = document.querySelector('ul');
const leftBtn = document.querySelector('#left-btn');
const rightBtn = document.getElementById('right-btn');
const text = document.querySelector('.slider-text');





btn.addEventListener('click', function (){
  btn.classList.toggle('active');
   menu.classList.toggle('show');
})


let slide = 0;
rightBtn.addEventListener('click', function(){

  console.log('hurray');
})

