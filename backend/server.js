// Importiamo Express per creare il server
const express = require("express");

// Importiamo CORS per permettere richieste dal frontend
const cors = require("cors");

// Creiamo applicazione Express
const app = express();


// Middleware
// Permette di leggere JSON nelle richieste
app.use(express.json());

// Permette richieste da altri domini
app.use(cors());


// Prima rotta di test
app.get("/", (req, res) => {

    res.json({
        message: "Tongue API funzionante"
    });

});


// Porta del server
const PORT = 3000;


// Avvio server
app.listen(PORT, () => {

    console.log(`Server avviato sulla porta ${PORT}`);

});