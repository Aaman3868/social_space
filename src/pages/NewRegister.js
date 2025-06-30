import React from 'react';
import App from '../App';
import { FcGoogle } from 'react-icons/fc';


function NewRegister() {
   
    return (
        
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: '450px', width: '100%', borderRadius: '20px' }}>
        <div className="card-body">
          <h4 className="text-center text-success mb-4">
            <i className="bi bi-person-plus me-2"></i>Register
          </h4>

          <div className="mb-3">
            <label className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-person-circle"></i></span>
              <input type="text" className="form-control" placeholder="Choose a username" />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-person-badge"></i></span>
              <input type="text" className="form-control" placeholder="Enter your full name" />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-envelope-at"></i></span>
              <input type="email" className="form-control" placeholder="Enter your email" />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
              <input type="password" className="form-control" placeholder="Create a password" />
            </div>
          </div>

          <div className="d-grid mb-3">
            <button className="btn btn-success">Register</button>
          </div>

          <div className="text-center">
            <span>Already have an account? </span>
            <a href="/" className="text-primary text-decoration-none">Login</a>
          </div>
        </div>
      </div>
    </div>
    );
}

export default NewRegister;
