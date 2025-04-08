import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Friends from './pages/Friends';
import Posts from './pages/Posts';
import Chat from './pages/Chat';
import Auth from './pages/Auth';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link><br></br>
        <Link to="/friends">Friends</Link><br></br>
        <Link to="/posts">Posts</Link><br></br>
        <Link to="/chat">Chat</Link><br></br>
        <Link to="/auth">Sign Up/Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
};

export default App;
