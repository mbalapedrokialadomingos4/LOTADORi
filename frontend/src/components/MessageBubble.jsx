import PlaceCard from "./PlaceCard";
export default function MessageBubble({ message }) {
  const isTourist = message.role === "tourist";

  const bubbleStyle = isTourist
    ? "bg-emerald-600 text-white rounded-br-sm"
    : message.isError
      ? "bg-red-50 text-red-700 border border-red-200 rounded-bl-sm"
      : "bg-white text-slate-800 shadow-sm rounded-bl-sm";

  return (
    <div className={`flex ${isTourist ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${bubbleStyle}`}
      >
        {message.text}
      </div>
    </div>
  );
}
