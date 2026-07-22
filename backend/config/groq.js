// Configurazione del client Groq utilizzando la chiave presente nel file .env
const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

module.exports = groq;
