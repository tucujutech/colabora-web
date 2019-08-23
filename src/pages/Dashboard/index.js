import React, { Component } from 'react';
import './styles.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="card">
        <span>
          6
          <i className="fas fa-users"></i>
        </span>
        <span>Total de Colaboradores</span>
      </div>
    );
  }
}

export default Dashboard;