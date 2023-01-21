const btn = document.querySelector('.toggle');
const menu = document.querySelector('ul');
const leftBtn = document.querySelector('#left-btn');
const rightBtn = document.getElementById('right-btn');
// const text = document.querySelector('.slider-text');
const img = document.querySelectorAll('.main-img');
const text = document.querySelectorAll('.text');



btn.addEventListener('click', function (){
  btn.classList.toggle('active');
   menu.classList.toggle('show');
})


let i = 0;


// function changeSlide(i) {
  img.forEach((img ) => {
    //  img.classList.replace("show", "hidden");
  });
// }

// rightBtn.forEach(btn => {
   rightBtn.addEventListener('click', () => {
  //   i++;
  //   img.forEach((img ) => {
  //     img.classList.replace("hidden", "show");
  //  });
  
  for (let i = 0; i < img.length; i++) {
    img[i].classList.replace("hidden", "show");
    console.log(i);
    
  }
    // if (i === 3) {
    //   i = 0;
    //   changeSlide(i);
    // } else {
    //   changeSlide(i);
    //   i++;
    // }
   });
// });

// function previmg() {
//   if (index === 0){
//     index = 3;
//   }
//   img[index % img.length].classList.replace('show', 'hidden');
//   img[(index - 1) % img.length].classList.replace('hidden', 'show');
//   text[index % text.length].classList.replace('show', 'hide');
//   text[(index - 1) % text.length].classList.replace('hide', 'show');
//   index--;

//   // // for (index = 0; index < img.length; index--) {
//   // //   img[index].classList.replace('show', 'hidden');
//   // //   // img[slideIndex - 1].classList.replace('show', 'hidden');
    
//   // }
// }

// function nextimg() {
//   img[index % img.length].classList.replace('show', 'hidden');
//   img[(index + 1) % img.length].classList.replace('hidden', 'show');
//   text[index % text.length].classList.replace('show', 'hide');
//   text[(index + 1) % text.length].classList.replace('hide', 'show');
//   index++;
// }

// leftBtn.addEventListener('click', previmg);
// rightBtn.addEventListener('click', nextimg);

