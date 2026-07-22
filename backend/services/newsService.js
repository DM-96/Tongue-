const newsApi = require("../config/axios");

// Recupera gli articoli dal servizio NewsData
const getNews = async (query) => {
  try {
    const response = await newsApi.get("/latest", {
      params: {
        // Chiave API NewsData
        apikey: process.env.NEWSDATA_API_KEY,

        // Ricerca inserita dall'utente
        q: query,

        // Lingua degli articoli
        language: "it",
      },
    });

    // Restituiamo solamente l'elenco degli articoli
    return response.data.results;
  } catch (error) {
    if (error.response?.status === 401) {
      const err = new Error("Errore di configurazione del servizio notizie");

      err.status = 500;

      throw err;
    }

    const err = new Error("Servizio notizie momentaneamente non disponibile");

    err.status = 503;

    throw err;
  }
};

module.exports = {
  getNews,
};
