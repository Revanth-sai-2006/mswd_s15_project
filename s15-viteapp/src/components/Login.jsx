import React from 'react';

export default function Login() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f4f4f9' }}>
      <div style={{ background: '#fff', padding: '20px 25px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '300px' }}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Login</h2>
        <form action="/login" method="post">
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Username</label>
            <input type="text" id="username" name="username" required style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Password</label>
            <input type="password" id="password" name="password" required style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Login</button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <a href="/forgot-password" style={{ color: 'blue', textDecoration: 'none' }}>Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}
