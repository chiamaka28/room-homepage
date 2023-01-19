const btn = document.querySelector('.toggle');
const menu = document.querySelector('ul');
const leftBtn = document.querySelector('#left-btn');
const rightBtn = document.getElementById('right-btn');
const text = document.querySelector('.slider-text');





btn.addEventListener('click', function (){
  btn.classList.toggle('active');
   menu.classList.toggle('show');
})


function nextText (i, text, className){
  if (i > 0){
    text[i - 1].classList.remove('hide');
  }

  if (i < text.length - 1){
    text[i + 1].classList.add('show')
  }
}

// let slide = 0;
rightBtn.addEventListener('click', nextText)

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}