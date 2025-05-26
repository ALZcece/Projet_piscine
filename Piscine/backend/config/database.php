<?php
function getDatabaseConnection() {
    $host = 'localhost';
    $dbname = 'piscine_db';
    $user = 'root';
    $pass = '';
    return new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
}
