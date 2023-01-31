const btn = document.querySelector('.toggle');
const menu = document.querySelector('ul');
const leftBtn = document.querySelector('#left-btn');
const rightBtn = document.getElementById('right-btn');
// const text = document.querySelector('section');
const img = document.querySelectorAll('.main-img');
const text = document.querySelectorAll('.text');



btn.addEventListener('click', function (){
  btn.classList.toggle('active');
   menu.classList.toggle('show');
    

})


let index = 0;
let i = 0;

function next() {
  img[index].classList.remove('show');
  index = (index + 1) % img.length;
  img[index].classList.add('show');

 
  
}


function nexttxt() {
  console.log(text.length);
  text[i].classList.remove('active');
  i = (i + 1) % text.length;
  text[i].classList.add('active');
}






function prev() {
  img[index].classList.remove('show');
  index = (index - 1 + img.length) % img.length;
  img[index].classList.add('show');  
}

function prevtxt() {
  console.log(text.length);
  text[i].classList.remove('active');
  i = (i - 1 + text.length) % text.length;
  text[i].classList.add('active');
}


leftBtn.addEventListener('click', function () {
  // prev();
  prevtxt();
});


rightBtn.addEventListener('click', function() {
  next();
  nexttxt();
});

//  let index = 0;

// function previmg() {

//   if (index === 0){
//     index = img.length;
   
//  }
 
//   img[index % img.length].classList.replace('show', 'hidden');
//   img[(index - 1) % img.length].classList.replace('hidden', 'show');
//   text[index % text.length].classList.replace('show', 'hide');
//   text[(index - 1) % text.length].classList.replace('hide', 'show');
//   index--;

 
// }
//////////////////////////////////////////////////////////////////////////////////////////////  

// function nextimg() {
//   img[index % img.length].classList.replace('show', 'hidden');
//   img[(index + 1) % img.length].classList.replace('hidden', 'show');
//   text[index % text.length].classList.replace('show', 'hide');
//   text[(index + 1) % text.length].classList.replace('hide', 'show');
//   index++;
// }

// leftBtn.addEventListener('click', previmg);
// rightBtn.addEventListener('click', nextimg);






