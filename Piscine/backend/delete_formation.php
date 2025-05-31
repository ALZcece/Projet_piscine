<?php
header('Content-Type: application/json');
$xmlFile = __DIR__ . '/../assets/xml/cv.xml';

$annee = $_POST['annee'] ?? '';
$titre = $_POST['titre'] ?? '';
$lieu = $_POST['lieu'] ?? '';

if (!$annee || !$titre || !$lieu) {
    echo json_encode(['success' => false, 'error' => 'Champs manquants']);
    exit;
}

if (!file_exists($xmlFile)) {
    echo json_encode(['success' => false, 'error' => 'Fichier XML manquant']);
    exit;
}

$xml = simplexml_load_file($xmlFile);
$found = false;
foreach ($xml->formations->formation as $i => $f) {
    if ((string)$f['annee'] === $annee && (string)$f->titre === $titre && (string)$f->lieu === $lieu) {
        unset($xml->formations->formation[$i]);
        $found = true;
        break;
    }
}
if ($found) {
    $xml->asXML($xmlFile);
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => 'Formation non trouvée']);
}
