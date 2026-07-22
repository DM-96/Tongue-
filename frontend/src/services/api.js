import axios from "axios";

// Creiamo un'istanza Axios configurata
// che utilizza l'URL del backend presente nel file .env

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Intercetta tutte le risposte ricevute dal backend
api.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    console.error("Errore API:", error.response);

    // Se il backend restituisce un messaggio personalizzato,
    // lo utilizziamo per mostrarlo all'utente
    if (error.response?.data?.message) {
      error.userMessage = error.response.data.message;
    } else {
      error.userMessage = "Si è verificato un errore inatteso";
    }

    return Promise.reject(error);
  },
);

export default api;
