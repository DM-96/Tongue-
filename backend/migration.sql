-- Creazione database
CREATE DATABASE IF NOT EXISTS tongue;

USE tongue;


-- Tabella conversazioni
CREATE TABLE IF NOT EXISTS conversations (

    id INT AUTO_INCREMENT PRIMARY KEY,

    message TEXT NOT NULL,

    response TEXT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);