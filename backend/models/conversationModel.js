const db = require("../config/db");

// Salva una nuova conversazione nel database
const saveConversation = async (message, response) => {
  const sql = `
        INSERT INTO conversations
        (message, response)
        VALUES (?, ?)
    `;
  // Eseguiamo la query passando i valori in modo parametrizzato
  await db.execute(sql, [message, response]);
};

// Recupera le ultime conversazioni dal database
const getConversationHistory = async (limit = 10) => {
  const sql = `
        SELECT message, response
        FROM conversations
        ORDER BY created_at DESC
        LIMIT ?
    `;

  // Recuperiamo le conversazioni
  const [rows] = await db.execute(sql, [limit]);

  // Restituiamo i risultati
  return rows;
};

module.exports = {
  saveConversation,
  getConversationHistory,
};
