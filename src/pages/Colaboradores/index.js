import React, { Component } from 'react';
import './styles.css';
import Juvia from '../../assets/images/juvia.jpg';

class Colaboradores extends Component {
  render() {
    return (
      <div className="Colaboradores">
        <div className="colaborador-card">
          <div className="colab-card-content">
            <img src={Juvia} alt="Juvia"/>
            <div className="colab-info">
              <span>Nome: </span>
              Alexander Silva de Leão
              <br/>
              <span>Função: </span>
              Desenvolvedor FullStack
              <br/>
              <span>Entrada: </span>
              02/09/2019 17:30
            </div>
          </div>
          <div className="colab-card-footer">
            <button type="button">
              <i className="fas fa-eye"></i>
              Ver
            </button>
            <button type="button">
              <i className="fas fa-edit"></i>
              Editar
            </button>
            <button type="button">
              <i className="fas fa-trash"></i>
              Deletar
            </button>
          </div>
        </div>

        <div className="colaborador-card">
          <div className="colab-card-content">
            <img src={Juvia} alt="Juvia"/>
            <div className="colab-info">
              <span>Nome: </span>
              Lucas Figueiredo
              <br />
              <span>Função: </span>
              Desenvolvedor Frontend
              <br />
              <span>Entrada: </span>
              02/09/2019 17:30
            </div>
          </div>
          <div className="colab-card-footer">
            <button type="button">
              <i className="fas fa-eye"></i>
              Ver
            </button>
            <button type="button">
              <i className="fas fa-edit"></i>
              Editar
            </button>
            <button type="button">
              <i className="fas fa-trash"></i>
              Deletar
            </button>
          </div>
        </div>

        <div className="colaborador-card">
          <div className="colab-card-content">
            <img src={Juvia} alt="Juvia"/>
            <div className="colab-info">
              <span>Nome: </span>
              Philipe Huan Ramos
              <br />
              <span>Função: </span>
              Desenvolvedor Backend
              <br />
              <span>Entrada: </span>
              02/09/2019 17:30
            </div>
          </div>
          <div className="colab-card-footer">
            <button type="button">
              <i className="fas fa-eye"></i>
              Ver
            </button>
            <button type="button">
              <i className="fas fa-edit"></i>
              Editar
            </button>
            <button type="button">
              <i className="fas fa-trash"></i>
              Deletar
            </button>
          </div>
        </div>
        
        <div className="colaborador-card">
          <div className="colab-card-content">
            <img src={Juvia} alt="Juvia"/>
            <div className="colab-info">
              <span>Nome: </span>
              Alexander Silva de Leão
              <br/>
              <span>Função: </span>
              Desenvolvedor FullStack
              <br/>
              <span>Entrada: </span>
              02/09/2019 17:30
            </div>
          </div>
          <div className="colab-card-footer">
            <button type="button">
              <i className="fas fa-eye"></i>
              Ver
            </button>
            <button type="button">
              <i className="fas fa-edit"></i>
              Editar
            </button>
            <button type="button">
              <i className="fas fa-trash"></i>
              Deletar
            </button>
          </div>
        </div>

        <div className="colaborador-card">
          <div className="colab-card-content">
            <img src={Juvia} alt="Juvia"/>
            <div className="colab-info">
              <span>Nome: </span>
              Lucas Figueiredo
              <br />
              <span>Função: </span>
              Desenvolvedor Frontend
              <br />
              <span>Entrada: </span>
              02/09/2019 17:30
            </div>
          </div>
          <div className="colab-card-footer">
            <button type="button">
              <i className="fas fa-eye"></i>
              Ver
            </button>
            <button type="button">
              <i className="fas fa-edit"></i>
              Editar
            </button>
            <button type="button">
              <i className="fas fa-trash"></i>
              Deletar
            </button>
          </div>
        </div>

        <div className="colaborador-card">
          <div className="colab-card-content">
            <img src={Juvia} alt="Juvia"/>
            <div className="colab-info">
              <span>Nome: </span>
              Philipe Huan Ramos
              <br />
              <span>Função: </span>
              Desenvolvedor Backend
              <br />
              <span>Entrada: </span>
              02/09/2019 17:30
            </div>
          </div>
          <div className="colab-card-footer">
            <button type="button">
              <i className="fas fa-eye"></i>
              Ver
            </button>
            <button type="button">
              <i className="fas fa-edit"></i>
              Editar
            </button>
            <button type="button">
              <i className="fas fa-trash"></i>
              Deletar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Colaboradores;