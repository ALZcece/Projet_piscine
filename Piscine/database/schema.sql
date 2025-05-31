-- Crée la base si elle n'existe pas (facultatif selon configuration)
CREATE DATABASE IF NOT EXISTS piscine_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE piscine_db;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    emploi VARCHAR(100) NOT NULL,
    photo_profil VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);