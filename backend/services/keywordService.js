const groq = require("../config/groq");

// Estrae la parola chiave principale dalla richiesta dell'utente
const extractKeyword = async (userMessage) => {
  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "system",
          content: `
Sei un assistente che estrae esclusivamente la parola chiave principale
dalla richiesta dell'utente.
Se la richiesta non contiene un argomento specifico,
rispondi con:
ALL

Regole:
- Rispondi con una sola keyword o una breve espressione.
- Non aggiungere spiegazioni.
- Non usare punteggiatura.
- Non scrivere frasi complete.

Esempi:

"Dimmi le ultime notizie su Apple"
→ Apple

"Vorrei sapere cosa succede nel mondo dell'intelligenza artificiale"
→ Intelligenza artificiale

"Parlami di Tesla"
→ Tesla
`,
        },

        {
          role: "user",
          content: userMessage,
        },
      ],

      temperature: 0,
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("Errore Groq Keyword:", error);

    if (error.status === 401) {
      const err = new Error(
        "La chiave API dell'intelligenza artificiale non è valida.",
      );

      err.status = 401;

      throw err;
    }

    const err = new Error(
      "Servizio di intelligenza artificiale momentaneamente non disponibile.",
    );

    err.status = 503;

    throw err;
  }
};

module.exports = {
  extractKeyword,
};
