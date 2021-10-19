import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import AppAlert from "./components/layout/AppAlert";
import About from "./pages/About";
import User from "./users/User";
import GithubState from "./context/gethub/GithubState";
import AlertState from "./context/alert/AlertState";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";

//PROGRESS - [inporgress] 32
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar title='Github Finder' />
            <AppAlert appalert={alert} />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route component={Notfound} />
            </Switch>
            <div className='container'></div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
