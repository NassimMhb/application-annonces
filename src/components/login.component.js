import React, { Component } from "react";
import Keys from '../constants/keys';
import Cookies from 'universal-cookie';
import Logo from '../images/logo.png';

import { withRouter } from 'react-router-dom';

class Login extends Component {
    state = {
        error: '',
        username: '',
        password: ''
    };

    handleChange = (e) => {
        const target = e.target;
        if (target.id === 'username') {
            this.setState({
                username: target.value
            });
        } else {
            this.setState({
                password: target.value
            });
        }
    }

    handleSubmit = (e) => {
        // initialize error
        this.setState({ error: '' });
        const { username, password } = this.state;
        if (username && password) {
            if (username === "nassim" && password==="123") {
                console.log("ça marche")
                this.props.setAuthenticate(true, "Se déconnecter", "sedeconnecter");
            //    e.preventDefault();
            } else {
                e.preventDefault();
                this.setState({
                    error: 'Votre identifiant ou votre mot de passe est incorrecte'
                });
            }
        } else {
            e.preventDefault();
            console.log("echec formulaire")
            this.setState({
                error: 'Veuillez entrer votre identifiant et votre mot de passe'
            });
        }
    }
    render() {
        if (this.props.isAuthenticated) 
        this.props.history.push('/accueil');
        const {error} = this.state;

        return (
            <div>
            {
                error ? <span style={{color:"red"}}>{error}</span> : <div></div>
            }
            <form>
                <h3><img src={Logo} alt="Logo" /></h3>
                
                <div className="form-group">
                    <label>Identifiant</label>
                    <input className="form-control" placeholder="Enter votre identifiant" id='username' onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Mot de passe</label>
                    <input type="password" className="form-control" placeholder="Enter votre mot de passe" id='password' onChange={this.handleChange} />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Se connecter</button>
            </form>
            </div>
        );
    }
}

export default withRouter(Login);