let search= document.querySelector(".logIn-form");

document.querySelector('#search-btn').onclick = ()=>{
    search.classList.toggle('active');
    menu.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}

let search1= document.querySelector(".logIn-form");

document.querySelector('#close-login-form').onclick = ()=>{
    search1.classList.remove('active');
    
}

let menu= document.querySelector(".navigation");

document.querySelector('#bars-btn').onclick = ()=>{
    menu.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}
let menu1= document.querySelector(".navigation");

document.querySelector('#close').onclick = ()=>{
    menu1.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}

let cart= document.querySelector(".cart-item");

document.querySelector('#cart-btn').onclick = ()=>{
   cart.classList.toggle('active');
   search.classList.remove('active');
   menu.classList.remove('active');
   user.classList.remove('active');
     
}
let user= document.querySelector(".login-form");

document.querySelector('#login-btn').onclick = ()=>{
    user.classList.toggle('active');
   cart.classList.remove('active');
   search.classList.remove('active');
   menu.classList.remove('active');
     
}

window.onscroll = ()=>{
    
    menu.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
     loop:true,
      spaceBetween: 20,
      autoplay: {
        delay:7500,
        disableOnInteraction: false,
      },
      centeredSlides:true,
    
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
         
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop:true,
     spaceBetween: 20,
     autoplay: {
       delay:7500,
       disableOnInteraction: false,
     },
     centeredSlides:true,
   
   breakpoints: {
     0: {
       slidesPerView: 1,
       
     },
     768: {
       slidesPerView: 2,
        
     },
     1020: {
       slidesPerView: 3,
       
     },
   },
 });

 window.addEventListener("scroll",function(){
  var header=document.querySelector("header");
  header.classList.toggle("change",window.scrollY > 0)
 })