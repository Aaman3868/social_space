
import App from '../App';
import { FcGoogle } from 'react-icons/fc';
import React, { useState } from 'react';
import axios from 'axios';


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const handleLogin = async (e) => {
    e.preventDefault();

    try {
     const response = await axios.post('http://localhost:8000/api/v1/users/login', {
      email,
      password
    }, {
      withCredentials: true
    });

      console.log('Login successful:', response.data);
      const { accesstoken, user } = response.data.data;
      localStorage.setItem('token', accesstoken);
      localStorage.setItem('username', user.username);
      localStorage.setItem('user_id', user._id);
      alert('Login successful!');
      window.location.href = '/Home';
    } catch (error) {
      console.error('Login failed:', error.response?.data?.message || error.message);
      alert('Login failed. Please check your credentials.');
    }
  };
   
    return ( 
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width: '100%', borderRadius: '20px' }}>
        <div className="card-body">
          <h4 className="text-center text-success mb-4">
            <i className="bi bi-box-arrow-in-right me-2"></i>Login
          </h4>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-envelope"></i></span>
              <input type="email" className="form-control" placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-lock"></i></span>
              <input type="password" className="form-control" placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">Remember Me</label>
          </div>

          <div className="d-grid mb-3">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>

          <div className="text-center">
            <a href="#" className="text-decoration-none text-primary">Forgot Password?</a>
          </div>

         
        </div>
      </div>
    </div>
    );
}

export default Login;
