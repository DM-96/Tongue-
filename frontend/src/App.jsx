import { useState } from "react";

import Header from "./components/Header";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";

function App() {
  const [messages, setMessages] = useState([]);

  const clearConversation = () => {
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center p-6">
      <Header />

      <main className="flex-1 overflow-y-auto">
        <ChatMessage messages={messages} />
      </main>

      <button
        onClick={clearConversation}
        className="mt-6 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-gray-100"
      >
        🗑️ Nuova conversazione
      </button>

      <ChatForm messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default App;
