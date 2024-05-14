
// dark mode-------------------------------------
let rond = document.querySelector('#rond');
let fond = document.querySelector("#fond");
let body = document.body;
body.style.backgroundColor = "white";

function themeClaire() {
    body.style.backgroundColor = "white";
    // titre.style.color = "black";
    fond.style.display = "flex";
    fond.style.justifyContent = "flex-end";
    rond.style.backgroundColor = "#118AB2  "; // Couleur du cercle clair
    fond.style.backgroundColor = "#FDF5BF"; // Couleur du fond clair
}

function themeSombre() {
    body.style.backgroundColor = "grey";
    // titre.style.color = "white";
    fond.style.display = "flex";
    fond.style.justifyContent = "flex-start";
    rond.style.backgroundColor = "#A5C4D4"; // Couleur du cercle sombre
    fond.style.backgroundColor = "#3a5743"; // Couleur du fond sombre
}
themeClaire()

// Au clic sur le curseur
        // - changement de theme
        rond.addEventListener("click", function () {
            console.log("Je suis dans la fonction");
            if (body.style.backgroundColor == "white") {
                console.log("Je suis dans le if");
                themeSombre();
            }
            else if (body.style.backgroundColor == "grey") {
                console.log("Je suis dans le else if");
                themeClaire();
            }
        });

        










