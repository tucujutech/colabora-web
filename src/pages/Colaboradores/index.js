import React, { Component } from 'react';
import './styles.css';

class Colaboradores extends Component {
  render() {
    return (
      <div className="Colaboradores">
        <div className="page-header">
          <h3>Lista de Colaboradores</h3>
        </div>
        <div className="table-bordered">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Especialidade</th>
                <th>Data de Criação</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Alexander Silva de Leão
                </td>
                <td>Desenvolvedor FullStack</td>
                <td>
                  26/08/2019 13:35
                </td>
                <td>
                  <button type="button">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button type="button">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button type="button">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  Philipe Huan Ramos
                </td>
                <td>
                  Desenvolvedor Backend
                </td>
                <td>
                  26/08/2019 13:35
                </td>
                <td>
                  <button type="button">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button type="button">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button type="button">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td>Lucas Figueiredo</td>
                <td>Desenvolvedor Frontend</td>
                <td>
                  26/08/2019 13:35
                </td>
                <td>
                  <button type="button">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button type="button">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button type="button">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Nome</th>
                <th>Especialidade</th>
                <th>Data de Criação</th>
                <th>Ações</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default Colaboradores;