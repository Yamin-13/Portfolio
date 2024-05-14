<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Récupérer et sécuriser les données du formulaire
    $nom = htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $email = htmlspecialchars($_POST['email']);
    $societe = isset($_POST['societe']) ? htmlspecialchars($_POST['societe']) : '';
    $message = htmlspecialchars($_POST['message']);

    // Vérifier que tous les champs obligatoires sont remplis
    if (empty($nom) || empty($prenom) || empty($email) || empty($message)) {
        die('Tous les champs obligatoires doivent être remplis.');
    }

    // Vérifier l'adresse e-mail
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die('Adresse email non valide.');
    }

    // Construire le contenu de l'e-mail
    $to = 'yamin22@live.fr'; // Remplacez par votre adresse e-mail
    $subject = 'Nouveau message de votre portfolio';
    $email_content = "
        <html>
        <head>
          <title>Nouveau message</title>
        </head>
        <body>
          <p>Vous avez reçu un nouveau message depuis votre portfolio :</p>
          <p><strong>Nom :</strong> $nom</p>
          <p><strong>Prénom :</strong> $prenom</p>
          <p><strong>Email :</strong> $email</p>
          <p><strong>Société :</strong> $societe</p>
          <p><strong>Message :</strong> $message</p>
        </body>
        </html>
    ";

    // Définir les en-têtes de l'e-mail
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: ' . $email . "\r\n";

    // Envoyer l'e-mail
    if (mail($to, $subject, $email_content, $headers)) {
        echo '<script>alert("Votre message a été envoyé avec succès."); window.location.href = "../index.html";</script>';
    } else {
        echo '<script>alert("Une erreur s\'est produite lors de l\'envoi de votre message."); window.location.href = "../index.html";</script>';
    }
} else {
    die('Méthode de requête non autorisée.');
}
?>
