import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_l5wis1a'; // Replace with your EmailJS service ID
    const templateID = 'template_283u9dl'; // Replace with your EmailJS template ID
    const userID = 'wSOmD2mIAoREI4oNA'; // Replace with your EmailJS user ID

    const templateParams = {
      message,
      email,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        alert('Message sent successfully!');
        setMessage('');
        setEmail('');
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
      });
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f9',
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '20px 25px',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          width: '350px',
        }}
      >
        <h1 style={{ marginBottom: '20px', color: '#333', textAlign: 'center' }}>
          Send an Email
        </h1>
        <form onSubmit={sendEmail}>
          <div style={{ marginBottom: '15px' }}>
            <label
              htmlFor="email"
              style={{
                display: 'block',
                marginBottom: '5px',
                color: '#555',
                fontWeight: 'bold',
              }}
            >
              Recipient Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label
              htmlFor="message"
              style={{
                display: 'block',
                marginBottom: '5px',
                color: '#555',
                fontWeight: 'bold',
              }}
            >
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                minHeight: '100px',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
