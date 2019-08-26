import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SideNavigation from "../../components/SideNavigation";
import './styles.css';
import MainHeader from '../../components/MainHeader';
import MainFooter from '../../components/MainFooter';
import Dashboard from '../../pages/Dashboard';
import Colaboradores from '../../pages/Colaboradores';

class MainContent extends Component {
  render() {
    return (
      <div className="MainApp">
        <MainHeader />
        <main className="MainContent">
          <SideNavigation />
          <div className="main-content">
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/colaboradores" component={Colaboradores} />
            </Switch>
          </div>
        </main>
        <MainFooter />
      </div>
    );
  }
}

export default MainContent;