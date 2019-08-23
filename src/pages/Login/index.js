import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import C from '../../assets/images/C.png';
import Colabora from '../../assets/images/Colabora.png';

const Login = () => {
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
        <Link to="/dashboard" className="login-button">
          Entrar
        </Link>
      </div>
    </div>
  );
}

export default Login;