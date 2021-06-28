
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')


const navLink = document.querySelectorAll('.nav__link');   

function linkAcotin(){

  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  

  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});


sr.reveal('.work__img',{interval: 200});


sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 


sr.reveal('.services__subtitle',{}); 
sr.reveal('.services__text',{}); 
sr.reveal('.services__data',{interval: 200}); 
sr.reveal('.services__img',{delay: 600});


sr.reveal('.testimonials__img',{});


sr.reveal('.contact__input',{interval: 200}); 




