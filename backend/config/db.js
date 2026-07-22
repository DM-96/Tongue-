const mysql = require("mysql2/promise");


// Creiamo la connessione al database MySQL
const db = mysql.createPool({

    host: process.env.DB_HOST,

    user: process.env.DB_USER,

    port: process.env.DB_PORT,

    password: process.env.DB_PASSWORD,

    database: process.env.DB_NAME

});


// Esportiamo il collegamento per usarlo nei model
module.exports = db;
