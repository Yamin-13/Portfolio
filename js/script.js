/*==================== Menu Hamburger  ====================*/
let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

/*==================== sections qui reste actif au schrolls  ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => { // le code est exécuter lorsque l'utilisateur fait défiler la page
   
    /*==================== retire le menu Hamburger au clic sur un lien ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== animation au scroll via la bibliotheque du site scrollReveal ====================*/

ScrollReveal({
    //  reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.homeContent, .heading', {
    origin: 'top'
});
ScrollReveal().reveal('.homeImg, .servicesContainer, .portfolioBox, .imgContact', {
    origin: 'bottom'
});
ScrollReveal().reveal('.homeContent h1, .aboutImg', {
    origin: 'left'
});
ScrollReveal().reveal('.homeContent p, .aboutContent, #btnContact', {
    origin: 'right'
});