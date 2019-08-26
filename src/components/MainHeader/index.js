import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import C from '../../assets/images/C.png';
import Colabora from '../../assets/images/Colabora.png';
import './styles.css';
import Juvia from '../../assets/images/juvia.jpg';

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileMenuOpen: false
    }

    this.profileMenuNode = React.createRef();
    this.toggleProfileMenu = this.toggleProfileMenu.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  toggleProfileMenu = () => {
    if (!this.state.profileMenuOpen) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState({
      profileMenuOpen: !this.state.profileMenuOpen
    });
  }

  handleOutsideClick = e => {
    if (this.profileMenuNode.current.contains(e.target)) {
      return;
    }

    return this.toggleProfileMenu();
  }

  profileMenu = () => {
    if (this.state.profileMenuOpen) {
      return (
        <div id="profile-dropdown-menu">
          <a href="#">
            <span>Perfil</span>
          </a>
          <Link to="/login">
            <span>Sair</span>
          </Link>
        </div>
      );
    }

    return null;
  }
  
  render() {
    return (
      <header className="MainHeader">
        <Link to="/dashboard" className="logo">
          <img
            src={C}
            className="logo-c"
            alt=""
          />
          <img
            src={Colabora}
            className="logo-colabora"
            alt=""
          />
        </Link>
        <div class="profile-dropdown" ref={this.profileMenuNode}>
          <button
            className="profile-button"
            onClick={this.toggleProfileMenu}>
            <img
              src={Juvia}
              className="profile-image"
              alt=""
            />
            <i className="fas fa-angle-down"></i>
          </button>
          {this.profileMenu()}
        </div>
      </header>
    );
  }
}

export default MainHeader;