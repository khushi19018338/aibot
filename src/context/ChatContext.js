import React, { createContext, useState } from "react";

// Create context
export const ChatContext = createContext();

// Provider component
export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hello! How can I help you today?" },
  ]);

  // Function to add a new message
  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
}
