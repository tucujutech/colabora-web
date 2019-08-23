import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import MainContent from './components/MainContent';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => (
            <Redirect to="/login" />
          )} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/*" component={MainContent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
