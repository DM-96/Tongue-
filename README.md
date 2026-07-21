# 📰 Tongue - AI News Assistant

Tongue è un chatbot basato sull'intelligenza artificiale che permette agli utenti di ottenere rapidamente riassunti delle notizie tramite una semplice richiesta in linguaggio naturale.

L'applicazione integra un frontend React, un backend Node.js/Express, un'API per il recupero delle notizie e un modello AI per analizzare e sintetizzare le informazioni.

---

# 🚀 Funzionalità

- Ricerca delle notizie tramite richiesta dell'utente
- Input in linguaggio naturale
- Recupero automatico degli articoli tramite API esterna
- Generazione di riassunti tramite intelligenza artificiale
- Conversazione mantenuta durante la sessione
- Salvataggio delle conversazioni nel database
- Gestione centralizzata degli errori tramite middleware

---

# 🛠 Tecnologie utilizzate

## Frontend

- React
- Vite
- Tailwind CSS
- Axios

## Backend

- Node.js
- Express.js
- MySQL
- Axios
- Dotenv

# 🌐 API Esterne utilizzate

## NewsData.io

Tongue utilizza NewsData.io per recuperare gli articoli di attualità in base alla richiesta dell'utente.

L'API viene utilizzata per:

- cercare notizie pertinenti alla richiesta inserita;
- recuperare titolo, descrizione, fonte e data degli articoli;
- fornire le informazioni necessarie al modello AI per creare il riassunto.

---

## Groq API

Groq viene utilizzato per l'elaborazione tramite modello linguistico AI.

Il modello riceve:

- la richiesta dell'utente;
- gli articoli recuperati dall'API NewsData.io;
- il prompt di sistema personalizzato.

Successivamente genera un riassunto chiaro e strutturato delle notizie.

## Servizi esterni

- NewsData.io API
- Groq API

## Database

- MySQL

---

# ⚙️ Installazione

## Clonare repository

```bash
git clone URL_REPOSITORY
```
