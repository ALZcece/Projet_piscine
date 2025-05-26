<?php
require_once __DIR__ . '/controllers/AuthController.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
    switch ($_POST['action']) {
        case 'login':
            AuthController::login($_POST['email'], $_POST['password']);
            break;
        // autres actions...
    }
}
