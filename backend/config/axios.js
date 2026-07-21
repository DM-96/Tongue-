const axios = require("axios");

// Configurazione client per NewsData API
const newsApi = axios.create({
    baseURL: "https://newsdata.io/api/1"
});

module.exports = newsApi;