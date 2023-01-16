const btn = document.querySelector('.toggle');
const menu = document.querySelector('ul');



btn.addEventListener('click', function (){
  btn.classList.toggle('active');
   menu.classList.toggle('show');
})



