-- Script d'initialisation de la base de données
-- Crée la base de données
CREATE DATABASE IF NOT EXISTS library_manager;
USE library_manager;

-- Crée la table users si elle n'existe pas
CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Crée la table imc_records si elle n'existe pas
CREATE TABLE IF NOT EXISTS Books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT,
    title VARCHAR(50) NOT NULL,
    author VARCHAR(50) NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_user) REFERENCES Users(id)
);

-- Insère des données de test
--INSERT INTO users (name) VALUES ('John Doe');
--INSERT INTO imc_records (user_id, imc) VALUES (1, 25.5);

INSERT INTO Users (name) VALUES ('John Doe');
INSERT INTO Users (name) VALUES ('JAck');

INSERT INTO Books (id_user, title, author, date) VALUES (1, 'The Great Gatsby', 'F. Scott Fitzgerald', '1925-04-10');
INSERT INTO Books (id_user, title, author, date) VALUES (1, 'To Kill a Mockingbird', 'Harper Lee', '1960-07-11');
INSERT INTO Books (id_user, title, author, date) VALUES (2, '1984', 'George Orwell', '1949-06-08');
INSERT INTO Books (id_user, title, author, date) VALUES (2, 'Pride and Prejudice', 'Jane Austen', '1813-01-28');