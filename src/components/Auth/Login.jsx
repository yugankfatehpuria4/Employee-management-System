import React, { useState } from 'react';
import '../../Login.css';
import bgImage from '../../../IMG2.webp';
import { FaUserCircle, FaLock, FaShieldAlt } from 'react-icons/fa';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password, rememberMe);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="holographic-globe">
        <div className="globe-effect"></div>
      </div>
      <div className="circuit-lines"></div>
      <div className="login-box">
        <div className="welcome-section">
          <FaUserCircle className="user-icon" />
          <h2 className="login-title">Welcome !</h2>
          <p className="login-subtitle">Admin Access Portal</p>
        </div>
        
        <form onSubmit={submitHandler} className="login-form">
          <div className="input-group">
            <FaUserCircle className="input-icon" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-input"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-input"
              type="password"
              placeholder="Enter password"
            />
          </div>
          <div className="form-footer">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">
            <FaShieldAlt className="button-icon" />
            Secure Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
