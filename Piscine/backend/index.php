<?php
require_once __DIR__ . '/controllers/AuthController.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
    switch ($_POST['action']) {
        case 'login':
            AuthController::login($_POST['email'], $_POST['password']);
            break;
        case 'register':
            $email = $_POST['email'];
            $password = $_POST['password'];
            $nom = $_POST['nom'];
            $prenom = $_POST['prenom'];
            $emploi = $_POST['emploi'];

            // Connexion à la BDD
            require_once __DIR__ . '/config/database.php';
            $pdo = getDatabaseConnection();

            // Gestion de l'upload de la photo
            $uploadDir = __DIR__ . '/uploads/';
            $photoName = isset($_FILES['photo_profil']['name']) ? basename($_FILES['photo_profil']['name']) : null;
            $photoTmp = isset($_FILES['photo_profil']['tmp_name']) ? $_FILES['photo_profil']['tmp_name'] : null;
            $photoPath = $photoName ? $uploadDir . $photoName : null;
            if ($photoTmp && $photoName) {
                if (!move_uploaded_file($photoTmp, $photoPath)) {
                    die("Erreur lors de l'upload de la photo.");
                }
            }

            $stmt = $pdo->prepare("INSERT INTO users (email, password, nom, prenom, emploi, photo_profil) VALUES (?, ?, ?, ?, ?, ?)");
            if ($stmt->execute([$email, $password, $nom, $prenom, $emploi, $photoName])) {
                header('Location: ../pages/login.html?register=success');
                exit;
            } else {
                echo "Erreur lors de la création du compte.";
            }
            break;
        case 'logout':
            AuthController::logout();
            break;
        // autres actions...
    }
}
