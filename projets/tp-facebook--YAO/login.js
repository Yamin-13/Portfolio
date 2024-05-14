let pseudoRegex = /^moi$/;
let passwordRegex = /^moi$/;
let isLogged = false;
let loginText = document.getElementById("loginText");
let loginWindow = document.querySelector("#loginWindow");
let profilLogin = document.querySelector("#profilLogin");


function logout() {
    console.log("je me deconnecte");
    // réinitialise les champs du formulaire
    document.getElementById('pseudo').value = "";
    document.getElementById('password').value = "";
    loginWindow.style.display = "none";

}
function showArticleForm() {
    loginWindow.style.display = "none";
    formulaireDePost.style.display = "block";
    isLogged = true;
    loginText.innerText = "Logout";
}

profilLogin.addEventListener("click", function () {
    if (!isLogged) {
        loginWindow.style.display = "block";
        formulaireDePost.style.display = "none";
    } else {
        formulaireDePost.style.display = "block";
        loginWindow.style.display = "none";
    }
});

cancelButton.addEventListener("click", function () {
    loginWindow.style.display = "none";
    logout()
    document.getElementById("messageIdIncorect").innerText = "";
});

function logVerification() {
    let pseudo = document.getElementById("pseudo").value;
    let password = document.getElementById("password").value;

    if (!pseudoRegex.test(pseudo) || !passwordRegex.test(password)) {
        let messageDiv = document.getElementById("messageIdIncorect");
        messageDiv.innerText = "Pseudo ou mot de passe incorrect.";
        // messageDiv.style.color = "red";
        return false;
    }

    showArticleForm();
    loginWindow.style.display = "none"; // masque le formulaire après une connexion réussie
    isLoginFormVisible = false; // mettre à jour l'état de visibilité du formulaire
    document.getElementById("messageIdIncorect").innerText = ""; // réinitialise le contenu du message

    return false;
}


profilLogin.addEventListener("click", function () {
    if (isLogged) {
        formulaireDePost.style.display = "none";
        loginWindow.style.display = "none"; 
        isLogged = false;
        loginText.innerText = "Login";
        logout()
    } else {
        loginWindow.style.display = "block";
    }
});

