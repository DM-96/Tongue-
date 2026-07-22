const { getNews } = require("../services/newsService");
const { formatArticles } = require("../services/articleService");
const { generateSummary } = require("../services/aiService");
const {
  saveConversation,
  getConversationHistory,
} = require("../models/conversationModel");
const { extractKeyword } = require("../services/keywordService");

// Gestisce la richiesta del chatbot Tongue
const chatController = async (req, res, next) => {
  try {
    // Recuperiamo il messaggio inviato dall'utente
    const { message } = req.body;

    // Controlliamo che i dati obbligatori siano presenti
    if (!message) {
      const error = new Error("Il messaggio è obbligatorio");

      error.status = 400;

      return next(error);
    }

    const keyword = await extractKeyword(message);

    // Recuperiamo gli articoli dalla API giornalistica
    const articles = await getNews(keyword);

    // Controlla se sono stati trovati articoli
    if (!articles || articles.length === 0) {
      return res.json({
        answer:
          "Non sono state trovate notizie disponibili per questa ricerca.",
      });
    }

    // Limitiamo il numero di articoli inviati all'AI
    // per evitare richieste troppo grandi
    const limitedArticles = articles.slice(0, 5);

    // Convertiamo gli articoli JSON in un testo leggibile dal modello AI
    const formattedArticles = formatArticles(limitedArticles);

    // Recupera le ultime conversazioni salvate
    const history = await getConversationHistory();

    // Inviamo gli articoli, la richiesta dell'utente
    // e la cronologia della conversazione al modello AI
    // per generare il riassunto
    const summary = await generateSummary(formattedArticles, message, history);

    // Salva la conversazione nel database
    await saveConversation(message, summary);

    // Restituiamo la risposta generata dall'AI
    return res.json({
      answer: summary,
    });
  } catch (error) {
    // Passiamo eventuali errori al middleware globale
    next(error);
  }
};

module.exports = chatController;
