import React from 'react'
import './login.css'
import LoginForm from './LoginForm';
function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <LoginForm />
        <div className="login-title-card">
          <div className="login-title">React JS</div>
          <div className="plateform-name">Geekster-MCT</div>
        </div>
      </div>
    </div>
  )
}

export default Login;