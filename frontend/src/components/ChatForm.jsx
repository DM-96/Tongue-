import { useState } from "react";
import api from "../services/api";

function ChatForm({ setMessages }) {
  // Stato che contiene il testo della richiesta
  const [message, setMessage] = useState("");

  // Stato che indica se la richiesta è in corso
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.post("/api/chat", {
        message,
      });

      setMessages((previousMessages) => [
        ...previousMessages,
        {
          question: message,
          answer: response.data.answer,
          time: new Date().toLocaleTimeString("it-IT", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);

      setMessage("");
    } catch (error) {
      console.error(error);

      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="mt-10 w-full max-w-3xl">
      <textarea
        rows="5"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Es. Notizie sull'intelligenza artificiale..."
        className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
        onKeyDown={(event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSubmit();
          }
        }}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Sto analizzando..." : "Genera riassunto"}
      </button>

      {error && (
        <div className="mt-5 rounded-lg bg-red-100 p-4 text-red-700">
          {error}
        </div>
      )}
    </section>
  );
}

export default ChatForm;
