<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Non connecté']);
    exit;
}
require_once __DIR__ . '/config/database.php';
$pdo = getDatabaseConnection();
$stmt = $pdo->prepare("SELECT nom, prenom, emploi, photo_profil FROM users WHERE id = ?");
$stmt->execute([$_SESSION['user_id']]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);
echo json_encode($user);
