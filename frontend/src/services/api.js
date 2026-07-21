import axios from "axios";

// Creiamo un'istanza Axios configurata
// che utilizza l'URL del backend presente nel file .env

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Intercetta tutte le risposte ricevute dal backend
api.interceptors.response.use(
  // Se la risposta è corretta la restituiamo normalmente
  (response) => {
    return response;
  },

  // Se il backend restituisce un errore passa da qui
  (error) => {
    console.error("Errore API:", error.response);

    // Se il backend ha inviato un messaggio
    if (error.response?.data?.message) {
      error.message = error.response.data.message;
    }

    // Restituiamo comunque l'errore
    // così il componente può gestirlo
    return Promise.reject(error);
  },
);

export default api;
