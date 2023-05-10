import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [credentials, setCredentials] = useState({
        email : "",
        password : ""
    })
    const navigate = useNavigate();
  const handleOnSubmit = async(event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/login', {
        method : 'POST', 
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            email : credentials.email,
            password : credentials.password
        })
    });
    const json = await response.json();
    console.log(json);
    if(json.success) {
      // Save the auth token and redirect
      localStorage.setItem('token', json.authToken);
      navigate('/');
    }
    else {
      alert("Invalid Credentials");
    }
  }
  const handleOnChange = (event) => {
    setCredentials({...credentials, [event.target.name] : event.target.value});
  }
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value = {credentials.email}
            aria-describedby="emailHelp"
            onChange={handleOnChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleOnChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
