// Componente che contiene la parte superiore dell'applicazione Tongue
// Mostra il titolo e una breve descrizione del servizio

function Header() {
  return (
    <header className="text-center">
      <h1 className="text-5xl font-bold">📰 Tongue</h1>

      <p className="mt-4 text-lg">
        Analizza le notizie più rilevanti con il supporto dell'intelligenza
        artificiale.
      </p>
    </header>
  );
}

export default Header;
