import React from 'react';
import App from '../App';
import { FcGoogle } from 'react-icons/fc';



function Login() {
   
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
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-lock"></i></span>
              <input type="password" className="form-control" placeholder="Enter your password" />
            </div>
          </div>

          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">Remember Me</label>
          </div>

          <div className="d-grid mb-3">
            <button className="btn btn-primary">Login</button>
          </div>

          <div className="text-center">
            <a href="#" className="text-decoration-none text-primary">Forgot Password?</a>
          </div>

          <div className="text-center mt-3">
            <a href="/register" className="btn btn-outline-success btn-sm">New Student? Register</a>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Login;
