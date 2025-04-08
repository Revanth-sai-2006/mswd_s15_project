import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Layout.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError("Email and password are required!");
      return;
    }
  
    console.log("Attempting login with:", { email, password });
  
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );
  
      console.log("Server response:", response.data);
  
      if (response.status === 200) {
        alert(response.data.message || "Login successful!");
  
        // Ensure token exists before using it
        if (response.data.token) {
          const token = response.data.token;  // Declare token here
          localStorage.setItem("token", token);
  
          try {
            const payload = JSON.parse(atob(token.split(".")[1])); // Decode token
            if (payload.role) {
              localStorage.setItem("role", payload.role);
            } else {
              console.warn("Role not found in token payload.");
            }
          } catch (error) {
            console.error("Error decoding token:", error);
          }
  
          navigate('/profile');
        } else {
          setError("Token not received from server.");
        }
      } else {
        setError("Invalid credentials!");
      }
    } catch (error) {
      console.error("Error logging in:", error.response ? error.response.data : error.message);
  
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else if (error.message.includes("Network Error")) {
        setError("Cannot connect to the server. Please try again later.");
      } else {
        setError("Server error. Please try again later.");
      }
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;













// import React, { useState } from "react";
// import "./Layout.css";
// import axios from "axios";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Email and password are required!");
//       return;
//     }

//     console.log("Attempting login with:", { email, password });

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/login",
//         { email, password },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       console.log("Server response:", response.data);

//       if (response.status === 200 && response.data.message === "Login successful") {
//         alert("Login successful!");
//         setError("");
//       } else {
//         setError("Invalid credentials!");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error.response ? error.response.data : error.message);

//       // Display backend error message if available
//       if (error.response && error.response.data.message) {
//         setError(error.response.data.message);
//       } else {
//         setError("Server error. Please try again later.");
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Email</label>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label>Password</label>
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         {error && <p className="error-message">{error}</p>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;