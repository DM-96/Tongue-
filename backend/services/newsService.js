const newsApi = require("../config/axios");

// Recupera gli articoli dalla API giornalistica
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

    return response.data.results;
  } catch (error) {
    const err = new Error("Errore nel recupero delle notizie");

    err.status = 503;
  }
};

module.exports = {
  getNews,
};
