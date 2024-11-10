// Configuration de base
ScrollReveal({
    distance: '40px', 
    duration: 1200,   // transition fluides
    delay: 100,
    reset: false      // Pas de répétition pour éviter les effet de flash
});

// Animation pour les titres des sections (vien du haut)
ScrollReveal().reveal('.heading-competences', {
    origin: 'top',
    distance: '50px', // arrive du haut 
    duration: 1400,
    opacity: 0
});

// animation pour les conteneurs de chaque section (vien du bas)
ScrollReveal().reveal('.competencesContainer', {
    origin: 'bottom',
    distance: '60px',
    duration: 1200,
    delay: 200, // Léger délai pour arriver après les titre
    opacity: 0 // ca commence transparent pour un effet d'apparition
});

// Animation pour chaque boîte de compétence (effet de zoom et apparition en cascade)
ScrollReveal().reveal('.competenceBox', {
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    delay: 300,
    opacity: 0,
    scale: 0.95,      //  réduction pour un effet de zoom
    interval: 300     // décalage pour l’effet en cascade
});
