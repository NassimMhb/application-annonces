import React, {useState, useEffect} from "react";
import Keys from '../constants/keys';
import Cookies from 'universal-cookie';
import Logo from '../images/logo.png';
import { Redirect} from 'react-router-dom'

import { withRouter } from 'react-router-dom';
const cookies = new Cookies();

const Login = (props) => {

    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('../../datamocked/users.json');
            const json = await result.json();
            setUsers(json);
            console.log(json);
        };
        fetchData();
    }, []);


    const handleSubmit = (e) => {
        // initialize error
        setError("");
        if (username && password) {
                users.map(user => {
                    if(username == user.identifiant && password == user.password){
                        console.log("ça marche")
                        props.setAuthenticate(true, "Se déconnecter", "sedeconnecter");
                        cookies.set(Keys.usernameKey, username);
                    }
                    else {
                        e.preventDefault();
                        setError("Votre identifiant ou votre mot de passe est incorrecte")
                    }
                })
        }
        else {
            e.preventDefault();
            console.log("echec formulaire")
            setError("Veuillez entrer votre identifiant et votre mot de passe")
        }
    }

    return (
        props.isAuthenticated ? 
        <Redirect to={{ pathname: '/accueil' }} />
        :
        <div className="auth-wrapper">
        <div className="auth-inner">
        <div>
        {
            error ? <span style={{color:"red"}}>{error}</span> : <div></div>
        }
        <form >
            <h3><img src={Logo} alt="Logo" /></h3>
            
            <div className="form-group">
                <label>Identifiant</label>
                <input className="form-control" placeholder="Enter votre identifiant" value={username} onChange={e => setUsername(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Mot de passe</label>
                <input type="password" className="form-control" placeholder="Enter votre mot de passe" value={password} onChange={e => setPassword(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Se connecter</button>
        </form>
        </div>
        </div>
      </div>
    );
    
}

export default withRouter(Login);