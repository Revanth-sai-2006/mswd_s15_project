import React, { useState, useEffect } from 'react';

export default function Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const discoColors = ['#FF0000', '#FFA500', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF'];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % discoColors.length);
    }, 10); // Change color every 500ms
    return () => clearInterval(interval);
  }, 100);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
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
      {isLoggedIn ? (
        <div
          style={{
            background: '#fff',
            padding: '20px 25px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            width: '300px',
          }}
        >
          <h2 style={{ marginBottom: '20px', color: '#333' }}>Success</h2>
          <p style={{ color: '#555' }}>You have logged in successfully!</p>
        </div>
      ) : (
        <div
          style={{
            background: '#fff',
            padding: '20px 25px',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            width: '300px',
          }}
        >
          <h2
            style={{
              marginBottom: '20px',
              color: discoColors[colorIndex],
              transition: 'color 0.5s',
            }}
          >
            Login
          </h2>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '15px' }}>
              <label
                htmlFor="username"
                style={{ display: 'block', marginBottom: '5px', color: 'blue' }}
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label
                htmlFor="password"
                style={{ display: 'block', marginBottom: '5px', color: 'blue' }}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
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
              }}
            >
              Login
            </button>
          </form>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <a href="/forgot-password" style={{ color: 'blue', textDecoration: 'none' }}>
              Forgot Password?
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
