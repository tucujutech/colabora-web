import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class SideNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colaboradoresMenuOpen: false
    }
  }

  colaboradoresMenuToggle = () => {
    const colaboradoresMenu = document.getElementById('colaboradores-menu');

    if (this.state.colaboradoresMenuOpen) {
      colaboradoresMenu.setAttribute('style', 'background-color: #07AAE2;');
    } else {
      colaboradoresMenu.setAttribute('style', 'background-color: #19F98C;');
    }

    this.setState({
      colaboradoresMenuOpen: !this.state.colaboradoresMenuOpen
    });
  }

  colaboradoresMenu = () => {
    if (this.state.colaboradoresMenuOpen) {
      return (
        <ul id="treeview-menu">
          <li>
            <Link to="/colaboradores">
              <i className="fas fa-file-alt"></i>
              <span>Lista</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-edit"></i>
              <span>Cadastrar</span>
            </a>
          </li>
        </ul>
      );
    }

    return null;
  }

  render() {
    return (
      <ul className="SideNavigation">
        <li>
          <button
            type="button"
            id="colaboradores-menu"
            onClick={this.colaboradoresMenuToggle}
          >
            <i className="fas fa-users"></i>
            <span>Colaboradores</span>
            <i className="fas fa-angle-down"></i>
          </button>
          {this.colaboradoresMenu()}
        </li>
        <li>
          <a href="#">
            <i className="fas fa-clock"></i>
            <span>Horas Extras</span>
          </a>
        </li>
      </ul>
    );
  }
}

export default SideNavigation;