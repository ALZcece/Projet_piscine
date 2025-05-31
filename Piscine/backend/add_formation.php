<?php
header('Content-Type: application/json');
$xmlFile = __DIR__ . '/../assets/xml/cv.xml';

// Récupérer les données POST
$annee = $_POST['annee'] ?? '';
$titre = $_POST['titre'] ?? '';
$lieu = $_POST['lieu'] ?? '';

if (!$annee || !$titre || !$lieu) {
    echo json_encode(['success' => false, 'error' => 'Champs manquants']);
    exit;
}

// Charger ou créer le XML
if (file_exists($xmlFile)) {
    $xml = simplexml_load_file($xmlFile);
} else {
    $xml = new SimpleXMLElement('<cv><formations></formations></cv>');
}

// Ajouter la formation
$formation = $xml->formations->addChild('formation');
$formation->addAttribute('annee', $annee);
$formation->addChild('titre', $titre);
$formation->addChild('lieu', $lieu);

// Sauvegarder
$xml->asXML($xmlFile);

echo json_encode(['success' => true]);
