// Formatta gli articoli ricevuti dalla News API
// preparando il testo che verrà inviato al modello AI

const formatArticles = (articles) => {
  return articles
    .map((article) => {
      return `
Titolo: ${article.title}

Descrizione:
${article.description}

Fonte:
${article.source_name}

Data:
${article.pubDate}
`;
    })
    .join("\n\n");
};

module.exports = {
  formatArticles,
};
