import React, { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import axios from "axios";

function ChatPage() {
  const { messages, addMessage } = useContext(ChatContext);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() === "") return;

    addMessage({ id: Date.now(), text: input, sender: "user" });

    const userMessage = input;
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/chat", { message: userMessage });
     
      addMessage({ id: Date.now() + 1, text: res.data.reply, sender: "bot" });
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching AI response:", error);

      addMessage({ id: Date.now() + 2, text: "Oops! Something went wrong.", sender: "bot" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/chatpagebg.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <h1 style={{ color: "white", textAlign: "center", marginBottom: "10px" }}>
       <b>Chat with Tricky</b>
      </h1>

      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          borderRadius: "15px",
          padding: "15px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <div
          style={{
            flexGrow: 1,
            overflowY: "auto",
            marginBottom: "10px",
            maxHeight: "400px",
          }}
        >
          {messages.length === 0 && <p style={{ color: "white" }}>No messages yet.</p>}
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                textAlign: msg.sender === "user" ? "right" : "left",
                margin: "5px 0",
              }}
            >
              <span
                style={{
                  backgroundColor: msg.sender === "user" ? "#4caf50" : "rgba(255,255,255,0.8)",
                  color: msg.sender === "user" ? "white" : "black",
                  padding: "8px 12px",
                  borderRadius: "15px",
                  display: "inline-block",
                  maxWidth: "70%",
                  wordWrap: "break-word",
                }}
              >
                {msg.text}
              </span>
            </div>
          ))}
          {loading && <p style={{ color: "white" }}>Thinking...</p>}
        </div>

        <div style={{ display: "flex" }}>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            style={{
              flexGrow: 1,
              padding: "8px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
            }}
            disabled={loading}
          />
          <button
            onClick={handleSend}
            style={{
              padding: "8px 16px",
              marginLeft: "10px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#4caf50",
              color: "white",
              cursor: "pointer",
            }}
            disabled={loading}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
