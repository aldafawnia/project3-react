import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from './pages/LandingPage';
import Register from './pages/Register';
import Cart from './pages/Cart';

function App() {
  return (
    <React.Fragment>
        <Router>
          <Switch>
              <Route path="/">
                <LandingPage/>
              </Route>
              {/* <Route exact path="/register">
                <Register/>
              </Route> */}
              {/* <Route path="/cart">
                <Cart/>
              </Route> */}
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
