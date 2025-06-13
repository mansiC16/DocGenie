import React, { useState } from 'react';
import './LoginInterface.css';

const LoginInterface = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleGoogleSignIn = () => {
    console.log('Google Sign In clicked');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Left side with image and text */}
        <div className="login-left">
       <div className="image-container">
  <img 
    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    alt="Business meeting" 
    className="login-image"
  />
</div>
          <div className="login-text">
            <h1>Login Here</h1>
            <p>Start your journey<br />now with us</p>
          </div>
        </div>

        {/* Right side with form */}
        <div className="login-right">
          <div className="form-container">
            <h2>Sign In</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Username or email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-options">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <span className="checkmark"></span>
                  Remember me
                </label>
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>

              <button type="submit" className="sign-in-btn">
                Sign in
              </button>
            </form>

            <div className="new-user">
              <span>New here?</span>
            </div>

            <button onClick={handleGoogleSignIn} className="google-btn">
              <svg className="google-icon" viewBox="0 0 24 24" width="18" height="18">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginInterface;