import axios from 'axios';
import React, { useState } from 'react'




const Registration = () => {
    const [user, setUser]=useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmpassword: "",
        role: "user"
    });

    const handleChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value});
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();

        if(user.password !== user.confirmpassword){
            alert("password and confirm password not same");
            return;
        }
        try{
            const respone= await axios.post("http://localhost:3000/users", user);
            alert(respone.data.message);
        }catch(error){
            console.log("error", error);
        }
    }

  return (
    <div className='container1'>
        <h1>Registration Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder="name" onChange={handleChange} required/>
        <input type="email" name='email' placeholder="email" onChange={handleChange} required/>
        <input type="text" name='phone' placeholder="phone" onChange={handleChange} required/>
        <input type="password" name='password' placeholder="password" onChange={handleChange} required/>
        <input type="password" name='confirmpassword' placeholder="confirm password" onChange={handleChange} required/>
        Role: <select name="role" onChange={handleChange}>
            <option value="User">User</option>
            <option value="Admin">Admin</option>
        </select>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Registration