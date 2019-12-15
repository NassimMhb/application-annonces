import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from './images/logo.png';

import Login from "./components/login.component";
import Logout from "./components/logout.component";
import Home from "./components/home.component";
import Fiche from "./components/fiche.component";
import Creation from "./components/creation.component";
import CreationFiche from "./components/creationfiche.component";
import Cookies from 'universal-cookie';
import Keys from './constants/keys';

const cookies = new Cookies();

class App extends Component {
  
  state = {
    isAuthenticate: false,
    loginLogout : "Se connecter",
    urlLog : "seconnecter",
    role:""
  }
  
  componentWillMount = () => {
    const token = cookies.get(Keys.tokenKey);
    if (token) {
        this.setState({
          isAuthenticated: true
        });
    }
  }
  
  setAuthenticate = (isAuthenticated, loginLogout, urlLog, rrole) => {
    this.setState({
      isAuthenticated: isAuthenticated,
      loginLogout : loginLogout,
      urlLog : urlLog,
      role: rrole
    })
  }

  
  render() {
  return (<Router >
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <Link className="navbar-brand" to={"/"}><img src={Logo} alt="Logo" /></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/accueil"}>Accueil</Link>
              </li>
              {this.state.role == "admin" &&
                <li className="nav-item">
                  <Link className="nav-link" to={"/creation"}>Création</Link>
                </li>
            
              }
              {this.state.role == "chef" || this.state.role == "admin" &&
                <li className="nav-item">
                  <Link className="nav-link" to={"/creationfiche"}>CréationFiche</Link>
                </li>
            
              }
              <li className="nav-item">
                <Link className="nav-link" to={"/fiches"}>Fiches</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={{pathname:"/"+this.state.urlLog}}>{this.state.loginLogout}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/seconnecter" 
                  render={() => <Login setAuthenticate={this.setAuthenticate} isAuthenticated={this.state.isAuthenticated} />} />
            <Route path="/sedeconnecter" 
                  render={() => <Logout setAuthenticate={this.setAuthenticate} isAuthenticated={this.state.isAuthenticated} />} />      
            <Route path="/accueil"
                  render={() => <Home setAuthenticate={this.setAuthenticate} isAuthenticated={this.state.isAuthenticated} />}/>
            <Route path="/creation" 
                  render={() => <Creation setAuthenticate={this.setAuthenticate} isAuthenticated={this.state.isAuthenticated} />} />
            <Route path="/fiches" 
                  render={() => <Fiche setAuthenticate={this.setAuthenticate} isAuthenticated={this.state.isAuthenticated} />} />
            <Route path="/creationfiche" 
                  render={() => <CreationFiche setAuthenticate={this.setAuthenticate} isAuthenticated={this.state.isAuthenticated} />} />
          </Switch>

    </div></Router>
  );
}
}

export default App;
