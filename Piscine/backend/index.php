<?php
// index.php - Point d'entrée du backend

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Inclusion de la configuration
require_once __DIR__ . '/config/database.php';

// Inclusion des routes (point d’accès à vos contrôleurs)
require_once __DIR__ . '/routes/index.php';

// Exemple de réponse par défaut si aucune route ne correspond
http_response_code(404);
echo json_encode(["message" => "Ressource non trouvée."]);
?>
