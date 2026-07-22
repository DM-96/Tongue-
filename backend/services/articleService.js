// Converte gli articoli recuperati dal servizio notizie
// in un testo leggibile dal modello AI

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
