require("dotenv").config();

const errorMiddleware = require("./middleware/errorMiddleware");

// Importiamo Express per creare il server
const express = require("express");

// Importiamo CORS per permettere richieste dal frontend
const cors = require("cors");

const chatRoutes = require("./routes/chatRoutes");

// Creiamo applicazione Express
const app = express();

app.use(express.json());
app.use(cors());

// Definiamo le rotte per il chatbot
app.use("/api/chat", chatRoutes);

// Prima rotta di test
app.get("/", (req, res) => {
  res.json({
    message: "Tongue API funzionante",
  });
});

// Middleware globale per la gestione degli errori
app.use(errorMiddleware);

// Porta del server
const PORT = process.env.PORT || 3000;

// Avvio server
app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});
