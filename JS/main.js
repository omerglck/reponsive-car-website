// Açılır kapanır menü
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')    

// Menünün gözükmesi için
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}
// Menünün gizlenmesi için
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

// Remove Menu
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //Menü listesinde ki a etiketindeki linklere her tıkladığımızda görünen show-menu classını kaldırırız
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

// Header ın arka planını değiştirmek için
function scrollHeader(){
    const header = document.getElementById('Header')
    //scroll 50yi geçerse aktif olması için
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
}

window.addEventListener('scroll',scrollHeader)

// Mixtup 
let mixerFeatured = mixitup('.featured_content' , {
    selectors: {
        target: '.featured_card'
    },
    animation: {
        duration: 300
    }
});
// link active
const linkFeatured = document.querySelectorAll('.featured_item');

function activeFeatured() {
  linkFeatured.forEach(l => l.classList.remove('active-featured'));
  this.classList.add('active-featured');
}

linkFeatured.forEach(l => l.addEventListener('click', activeFeatured));

// scrool up
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (window.scrollY >= 350) {
      scrollUp.classList.add('show-scroll');
    } else {
      scrollUp.classList.remove('show-scroll');
    }
  }
  
  window.addEventListener('scroll', scrollUp);



const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
})

sr.reveal('.home-title, .popular_container, .features-img, .featured_filters')
sr.reveal('.home-subtitle', {delay:500})
sr.reveal('.home-electric',{delay:600})
sr.reveal('.home-img',{delay:800})
sr.reveal('.home_car-info',{delay:900,interval:100,origin:'bottom'})
sr.reveal('.home-button',{delay:1000,interval:100,origin:'bottom'})
sr.reveal('.about_group,.offer_info',{origin:'left'})
sr.reveal('.about-info,.offer_img',{origin:'right'})
sr.reveal('.features_map',{delay:600,origin:'right'})
sr.reveal('.features_card',{interval:300})
sr.reveal('.featured_card,.logos_content',{interval:100})

