// Middleware globale per la gestione degli errori

const errorMiddleware = (error, req, res, next) => {
  console.error(error);

  const statusCode = error.status || 500;

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: error.message || "Errore interno del server",
  });
};

module.exports = errorMiddleware;
