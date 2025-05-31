<?php
require_once __DIR__ . '/../models/User.php';

class AuthController {
    public static function login($email, $password) {
        $user = User::findByEmail($email);
        if ($user && $user['password'] === $password) {
            session_start();
            $_SESSION['user_id'] = $user['id'];
            header('Location: ../pages/accueil.html');
            exit;
        } else {
            echo "Identifiants invalides.";
        }
    }

    public static function logout() {
        session_start();
        session_unset();
        session_destroy();
        header('Location: ../pages/login.html');
        exit;
    }
}
