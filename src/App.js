import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from './images/logo.png';

import Login from "./components/login.component";
import Logout from "./components/logout.component";
import Home from "./components/home.component";
import Cookies from 'universal-cookie';
import Keys from './constants/keys';

const cookies = new Cookies();

class App extends Component {
  
  state = {
    isAuthenticate: false,
    loginLogout : "Se connecter",
    urlLog : "seconnecter"
  }
  
  componentWillMount = () => {
    const token = cookies.get(Keys.tokenKey);
    if (token) {
        this.setState({
          isAuthenticated: true
        });
    }
  }
  
  setAuthenticate = (isAuthenticated, loginLogout, urlLog) => {
    this.setState({
      isAuthenticated: isAuthenticated,
      loginLogout : loginLogout,
      urlLog : urlLog
    })
  }

  
  render() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <Link className="navbar-brand" to={"/"}><img src={Logo} alt="Logo" /></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/accueil"}>Accueil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={{pathname:"/"+this.state.urlLog}}>{this.state.loginLogout}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/seconnecter" 
                  render={() => <Login setAuthenticate={this.setAuthenticate} isAuthenticated={this.state.isAuthenticated} />} />
            <Route path="/sedeconnecter" 
                  render={() => <Logout setAuthenticate={this.setAuthenticate} isAuthenticated={this.state.isAuthenticated} />} />      
            <Route path="/accueil"
                  render={() => <Home setAuthenticate={this.setAuthenticate} isAuthenticated={this.state.isAuthenticated} />}/>
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}
}

export default App;
