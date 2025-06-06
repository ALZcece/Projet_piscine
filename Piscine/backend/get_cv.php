<?php
$xmlFile = __DIR__ . '/../assets/xml/cv.xml';
if (file_exists($xmlFile)) {
    header('Content-Type: application/xml');
    header('Content-Disposition: attachment; filename=\"cv.xml\"');
    readfile($xmlFile);
    exit;
} else {
    http_response_code(404);
    echo 'Fichier CV non trouvé.';
}