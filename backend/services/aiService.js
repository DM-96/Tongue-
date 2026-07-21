const Groq = require("groq-sdk");

const systemPrompt = require("../prompts/systemPrompt");

// Creiamo il client Groq utilizzando la chiave salvata nel file .env
// In questo modo la API key non viene scritta direttamente nel codice
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Funzione che invia gli articoli e la richiesta dell'utente al modello AI
// e restituisce il riassunto generato
const generateSummary = async (articles, userMessage, history) => {
  try {
    // Convertiamo la cronologia recuperata dal database
    // nel formato richiesto dai modelli chat
    const conversationHistory = history.flatMap((conversation) => [
      {
        role: "user",
        content: conversation.message,
      },

      {
        role: "assistant",
        content: conversation.response,
      },
    ]);

    // Chiamata al modello linguistico tramite API Groq
    const response = await groq.chat.completions.create({
      // Modello AI utilizzato per generare il testo
      model: "llama-3.3-70b-versatile",

      // La proprietà messages contiene la conversazione inviata al modello
      messages: [
        // Definisce il comportamento del modello
        {
          role: "system",
          content: systemPrompt,
        },

        // Inserisce la cronologia della conversazione
        //Lo spread operator (...) serve a inserire tutti gli elementi di un array dentro un altro array.
        ...conversationHistory,

        // Nuova richiesta dell'utente
        {
          role: "user",
          content: `
Richiesta dell'utente:
${userMessage}

Articoli disponibili:
${articles}
`,
        },
      ],

      // Controlla il livello di creatività della risposta
      // Valori bassi rendono la risposta più precisa e meno inventata
      temperature: 0.1,
    });

    // La risposta del modello contiene diverse informazioni,
    // ci interessa solamente il testo generato dall'AI
    return response.choices[0].message.content;
  } catch (error) {
    const err = new Error("Errore durante la generazione del riassunto");

    err.status = 500;

    throw err;
  }
};

// Esportiamo la funzione per poterla utilizzare nel controller
module.exports = {
  generateSummary,
};
