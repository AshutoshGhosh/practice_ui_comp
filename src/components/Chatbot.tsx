import React, { useState } from 'react';
import '../styles/Chatbot.css'; 

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'User', text: input }]);
      setInput('');
      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: 'Bot', text: 'Thanks for your message!' }]);
      }, 1000);
    }
  };

  return (
    <div className={`chatbot ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleChat} className="chatbot-toggle">
        Chat
      </button>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.sender.toLowerCase()}`}>
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type a message..."
          />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
