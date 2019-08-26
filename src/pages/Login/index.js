import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import C from '../../assets/images/C.png';
import Colabora from '../../assets/images/Colabora.png';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="login-box">
          <div className="login-logo">
            <img
              className="c-logo"
              src={C}
              alt=""
            />
            <img
              className="colabora-logo"
              src={Colabora}
              alt=""
            />
          </div>
          <input
            type="text"
            name="name"
            className="login-input"
            placeholder="Login"
          />
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="Senha"
          />
          <Link to="/dashboard" className="login-button">
            Entrar
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;