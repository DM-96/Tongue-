import { useEffect, useRef } from "react";

function ChatMessage({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);
  return (
    <div className="mt-10 w-full max-w-3xl space-y-6">
      {messages.map((chat, index) => (
        <div
          key={index}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
        >
          {/* Messaggio utente */}
          <div className="mb-5">
            <p className="mb-1 text-sm font-semibold text-blue-600">👤 Tu</p>

            <p className="mt-2 rounded-lg bg-gray-100 p-3">{chat.question}</p>

            <p className="mt-2 text-xs text-gray-500">{chat.time}</p>
          </div>

          {/* Risposta AI */}
          <div className="border-t border-gray-200 pt-5">
            <p className="mb-1 text-sm font-semibold text-green-600">
              🤖 Tongue
            </p>

            <p className="whitespace-pre-line leading-7">{chat.answer}</p>
          </div>
        </div>
      ))}
      <div ref={bottomRef}></div>
    </div>
  );
}

export default ChatMessage;
