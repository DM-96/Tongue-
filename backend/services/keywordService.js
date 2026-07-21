const groq = require("../config/groq");

// Estrae la parola chiave principale dalla richiesta dell'utente
const extractKeyword = async (userMessage) => {
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
};

module.exports = {
  extractKeyword,
};
