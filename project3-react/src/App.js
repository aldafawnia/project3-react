import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from './pages/LandingPage';

function App() {
  return (
    <React.Fragment>
        <Router>
          <Switch>
              <Route path="/product">
                <LandingPage/>
              </Route>
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
