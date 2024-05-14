<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "yamin22@live.fr"; 
    $subject = "Nouveau message de $name via le formulaire de contact";
    $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Merci $name, votre message a été envoyé.";
    } else {
        echo "Désolé, il y a eu une erreur. Veuillez réessayer.";
    }
}
