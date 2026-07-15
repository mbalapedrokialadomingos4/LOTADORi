import { create } from "zustand";
import { sendChatMessage } from "../lib/api.js";

let nextId = 1;
const newMessage = (role, text, extra = {}) => ({
  id: nextId++,
  role,
  text,
  ...extra,
});

export const useChatStore = create((set, get) => ({
  messages: [
    newMessage(
      "agent",
      "Bem-vindo a Angola! 👋 Sou o TurismoConnect, o teu assistente de viagem. Escreve uma mensagem para começarmos."
    ),
    
  ],
  isSending: false,

  // Perfil do turista (preenchido nas próximas sprints)
  profile: {
    name: null,
    language: "pt",
    nationality: null,
    currentCity: null,
    interests: [],
  },

  updateProfile: (data) =>
    set((state) => ({ profile: { ...state.profile, ...data } })),

  sendMessage: async (text) => {
    const trimmed = text.trim();
    if (!trimmed || get().isSending) return;

    set((state) => ({
      messages: [...state.messages, newMessage("tourist", trimmed)],
      isSending: true,
    }));

    try {
      const reply = await sendChatMessage(trimmed);
      set((state) => ({
        messages: [...state.messages, newMessage("agent", reply)],
      }));
    } catch {
      set((state) => ({
        messages: [
          ...state.messages,
          newMessage(
            "agent",
            "Não consegui falar com o servidor. Confirma que o backend está a correr e tenta outra vez.",
            { isError: true }
          ),
        ],
      }));
    } finally {
      set({ isSending: false });
    }
  },
}));
