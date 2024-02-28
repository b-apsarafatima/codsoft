'use strict'; // Add use strict directive to enforce stricter parsing and error handling

const showMenu = (toggleId, navId) => { 
    const toggle = document.getElementById(toggleId); 
    const nav = document.getElementById(navId);
 
    if (toggle && nav) { 
        toggle.addEventListener('click', () => { 
            nav.classList.toggle('show'); 
        }); 
    } 
}; 

showMenu('nav-toggle', 'nav-menu');

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link');

function linkAction() { 
    const navMenu = document.getElementById('nav-menu'); 
    navMenu.classList.remove('show'); 
} 

navLink.forEach(n => n.addEventListener('click', linkAction));

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() { 
    const scrollY = window.pageYOffset;

    sections.forEach(current => { 
        const sectionHeight = current.offsetHeight; 
        const sectionTop = current.offsetTop - 50; 
        let sectionId = current.getAttribute('id'); // Declare sectionId variable using let

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
            document.querySelector('#nav-menu a[href*=' + sectionId + ']').classList.add('active'); // Update selector to use #nav-menu
        } else { 
            document.querySelector('#nav-menu a[href*=' + sectionId + ']').classList.remove('active'); // Update selector to use #nav-menu
        } 
    }); 
}

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({ 
    origin: 'top', 
    distance: '80px', 
    duration: 2000, 
    reset: true 
});

// SCROLL REVEAL ANIMATION FOR VARIOUS SECTIONS (HOME, ABOUT, SKILLS, PORTFOLIO, CONTACT)
sr.reveal('.home__title', {}); 
sr.reveal('.home__scroll', {delay: 200}); 
sr.reveal('.home__img', {origin: 'right', delay: 400});

sr.reveal('.about__img', {delay: 500}); 
sr.reveal('.about__subtitle', {delay: 300}); 
sr.reveal('.about__profession', {delay: 400}); 
sr.reveal('.about__text', {delay: 500}); 
sr.reveal('.about__social-icon', {delay: 600, interval: 200});

sr.reveal('.skills__subtitle', {}); 
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100}); 
sr.reveal('.skills__img', {delay: 400});

sr.reveal('.portfolio__img', {interval: 200}); 

sr.reveal('.contact__subtitle', {}); 
sr.reveal('.contact__text', {interval: 200}); 
sr.reveal('.contact__input', {delay: 400}); 
sr.reveal('.contact__button', {delay: 600});
