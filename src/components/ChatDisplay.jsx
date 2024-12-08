// src/components/ChatDisplay.jsx
import React from "react";

const ChatDisplay = ({ messages }) => {
  return (
    <div className="chat-display">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`chat-bubble ${msg.sender === "user" ? "user" : "ai"}`}
        >
          {msg.text}
          {msg.imageUrl && <img src={msg.imageUrl} alt="Generated" />}
        </div>
      ))}
    </div>
  );
};

export default ChatDisplay;
