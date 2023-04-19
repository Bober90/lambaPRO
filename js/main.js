const menuBtn=document.querySelector('.menu-btn');
const menuMobile=document.querySelector('.menu-mobile');

menuBtn.addEventListener('click',()=>{
  menuMobile.classList.toggle('menu--open');
});




const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView:2,
    spaceBetween:20,
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    768:{
      slidesPerView:2,
      spaceBetween:20,
    }
  }
  });

  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat:37.23144882050148 , lng:-8.628374985876258 },
      zoom: 14,
      
    });
  }
  window.initMap = initMap;