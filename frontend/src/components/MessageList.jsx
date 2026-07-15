import { useEffect, useRef } from "react";
import { useChatStore } from "../store/chatStore.js";
import MessageBubble from "./MessageBubble.jsx";
import PlaceGrid from "./PlaceGrid.jsx";

export default function MessageList() {
  const messages = useChatStore((state) => state.messages);
  const isSending = useChatStore((state) => state.isSending);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isSending]);


  return (
    <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 px-4 py-5">

      {messages.map((message) => (

        <div key={message.id}>

          <MessageBubble message={message} />


          {message.type === "recommendations" && (
            <PlaceGrid />
          )}

        </div>

      ))}


      {isSending && (
        <div className="flex justify-start">
          <div className="rounded-2xl rounded-bl-sm bg-white px-4 py-3 text-sm text-slate-400 shadow-sm">
            A escrever…
          </div>
        </div>
      )}


      <div ref={bottomRef} />

    </div>
  );
}