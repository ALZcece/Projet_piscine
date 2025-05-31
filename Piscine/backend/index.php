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

            // Connexion à la BDD
            require_once __DIR__ . '/config/database.php';
            $pdo = getDatabaseConnection();
            $stmt = $pdo->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
            if ($stmt->execute([$email, $password])) {
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
