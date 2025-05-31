<?php
header('Content-Type: application/json');
$xmlFile = __DIR__ . '/../assets/xml/cv.xml';

$formations = [];
if (file_exists($xmlFile)) {
    $xml = simplexml_load_file($xmlFile);
    foreach ($xml->formations->formation as $f) {
        $formations[] = [
            'annee' => (string)$f['annee'],
            'titre' => (string)$f->titre,
            'lieu'  => (string)$f->lieu
        ];
    }
}
echo json_encode(['formations' => $formations]);
