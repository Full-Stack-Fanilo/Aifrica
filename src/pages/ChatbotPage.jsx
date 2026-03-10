import React, { useState, useEffect, useRef } from 'react';
import '../css/ChatbotPage.css';

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { 
      type: 'bot', 
      text: "Bonjour ! Je suis l'assistant Aifrica. Je suis là pour répondre à vos questions sur l'intelligence artificielle et la data en Afrique. Comment puis-je vous aider ?" 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage('');
    setIsLoading(true);

    // Add user message to chat
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);

    try {
      const response = await fetch('https://aifrica-chatbot-backend.onrender.com/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer aifrica_93KslfP2039dkfP29dkfP29'
        },
        body: JSON.stringify({
          question: userMessage,
          session_id: sessionId
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Add bot response to chat
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: data.answer || "Désolé, je n'ai pas pu traiter votre demande. Veuillez réessayer." 
      }]);

    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: "Désolé, une erreur s'est produite. Veuillez vérifier votre connexion et réessayer." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chatbot-page">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <div className="header-content">
            <div className="bot-avatar">
              <span className="bot-icon">🤖</span>
            </div>
            <div className="header-info">
              <h1>Assistant Aifrica</h1>
              <p>Votre expert en IA et Data pour l'Afrique</p>
            </div>
          </div>
        </div>

        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.type}`}>
              <div className="message-content">
                {message.type === 'bot' && (
                  <div className="message-avatar">
                    <span className="avatar-icon">🤖</span>
                  </div>
                )}
                <div className="message-text">
                  {message.text}
                </div>
                {message.type === 'user' && (
                  <div className="message-avatar">
                    <span className="avatar-icon">👤</span>
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message bot">
              <div className="message-content">
                <div className="message-avatar">
                  <span className="avatar-icon">🤖</span>
                </div>
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="chatbot-input">
          <div className="input-container">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tapez votre message ici..."
              className="message-input"
              rows={1}
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={!inputMessage.trim() || isLoading}
              className="send-button"
            >
              {isLoading ? (
                <div className="loading-spinner"></div>
              ) : (
                <span>➤</span>
              )}
            </button>
          </div>
          <div className="input-info">
            <p>Appuyez sur Entrée pour envoyer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
