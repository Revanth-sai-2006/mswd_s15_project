import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token"); // ✅ Remove the token
    navigate('/'); // ✅ Redirect to home page
  }, []); // ✅ Runs only once when the component mounts

  return <div>Logging out...</div>;
};

export default Logout;
