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

// let slidePosition = 0;
// const totalSlides = slides.length;
// console.log(totalSlides);

// rightBtn.addEventListener('click', function() {
//  moveToNextSlide()
 
// })

// leftBtn.addEventListener('click', () => {
//  moveToPreviousSlide()

// })



// function moveToNextSlide() {
  
//   if(slidePosition === totalSlides - 1){
//     slidePosition = 0;
//   }else{
//     slidePosition++;
//   }
//  updateSlidePosition();
  
// };

// function moveToPreviousSlide() {
//   if (slidePosition === 0){
//     slidePosition = totalSlides - 1;
//   }else{
//     slidePosition--;
//   }
//   updateSlidePosition();
 
// };
// function updateSlidePosition(){
//   // for (let slide of slides) {
//   //   console.log(slide)
//   //   slide.classList.remove('show');
//   //   slide.classList.add("hidden");
//   // }
//   slides.forEach(slide => {
//     slide.classList.remove('show');
//     slide.classList.add("hidden");
//   });
//    slides[slidePosition].classList.add("show");
//   }
// showSlides(i);


// function plusSlides(n){
//   showSlides(i += n);
// }

// function currentSlide(n){
//   showSlides(i = n);
// }

// function showSlides(n) {
//   // let i;
//   let slides = img;

//   if (n > slides.length) {i = 1}
//   if (n < 1) {i = slides.length}
//   for (let i = 0;  i < slides.length; i++) {
//     slides[i].style.display = "none";
    
//   }
//   slides[ i - 1].style.display = "block"
// };

// rightBtn.addEventListener('click', showSlides)


//  let i = 0;

//    rightBtn.addEventListener('click', () => {
 
//   if (i > 1) {i = slides.length - 1}
//   if (i < 1) {i = slides.length}

//   for (let i = 0; i < slides.length;  i++ ) {
//       slides[i].style.display = "none";
//       console.log(slides.length);
//       console.log(i)
     
//   } 
//   slides[i - 1].style.display = "block";
 
//    });

//////////////////////////////////////
// let currentElementIndex = 0;
// rightBtn.addEventListener('click', () => {
//   console.log('clicked')
// for (let i = 0; i < slides.length; i++) {
//   if(i === currentElementIndex){
//     slides[i].style.display = "none";
  
//   console.log(i);
//   }else{
//     img[(i) % slides.length].style.display = "block";
   
//   }}}
// ) ;
////////////////////////////////////////////
// }
// });
//////////////////////////////////////////////////////////////////////////

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






