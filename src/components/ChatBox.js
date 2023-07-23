import React, { useState } from 'react';

const styles = {
  container: {
    border: '1px solid #007BFF', // updated border color to match title
    borderRadius: '10px',
    padding: '10px',
    maxWidth: '400px',
    margin: '20px auto',
    backgroundColor: '#fafafa',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    overflow: 'auto',
    height: '400px',
  },
  messageList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  message: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  inputContainer: {
    display: 'flex',
    marginTop: '10px',
  },
  input: {
    flex: 1,
    marginRight: '10px',
  },
  sendButton: {
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '3px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
};

const prebuiltResponses = [
    'Sounds great!',
    'Interesting perspective.',
    'Could you provide more details?',
    'Thanks for sharing that.',
    'I see where you’re coming from.',
    // Add as many responses as you want
  ];
  
  function ChatBox() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
  
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };
  
    const handleSendMessage = () => {
      if (message.trim() !== '') {
        // Add user message to chat
        setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }]);
        setMessage('');
  
        // Choose random prebuilt response and add to chat after delay
        const randomResponse = prebuiltResponses[Math.floor(Math.random() * prebuiltResponses.length)];
        setTimeout(() => {
          setMessages(prevMessages => [...prevMessages, { text: randomResponse, sender: 'bot' }]);
        }, 1000);  // 1 second delay
      }
    };
  
    return (
      <div style={styles.container}>
        <h2>Chat</h2>
        <ul style={styles.messageList}>
          {messages.map((message, index) => (
            <li key={index} style={styles.message}>
              <strong>{message.sender}: </strong> {message.text}
            </li>
          ))}
        </ul>
        <div style={styles.inputContainer}>
          <input
            type="text"
            value={message}
            onChange={handleMessageChange}
            style={styles.input}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    );
  }
  
  export default ChatBox;