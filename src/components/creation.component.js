import React, {useState, useEffect} from "react";
import Keys from '../constants/keys';
import Cookies from 'universal-cookie';
import { Redirect} from 'react-router-dom'

const cookies = new Cookies();

const Creation = (props) => {

    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
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
                        console.log(user.role)
                        props.setAuthenticate(true, "Se déconnecter", "sedeconnecter", user.role);
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
        <div className="auth-wrapper marg40" >
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Role</th>
                <th scope="col">Nom</th>
                <th scope="col">Prenom</th>
                </tr>
            </thead>
            <tbody>
            { Object.entries(users).length > 0 && users.map(user => {
                return <tr>
                <th scope="row">{user.identifiant}</th>
                <td>{user.role}</td>
                <td>{user.nom}</td>
                <td>{user.prenom}</td>
                </tr>
            })}
            </tbody>
            </table>

        <div className="auth-inner">
        <div>
        {
            error ? <span style={{color:"red"}}>{error}</span> : <div></div>
        }
        <form >
            
            <div className="form-group">
                <label>Identifiant</label>
                <input className="form-control" placeholder="Enter l' identifiant" value={username} onChange={e => setUsername(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Mot de passe</label>
                <input  className="form-control" placeholder="Enter le mot de passe" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Role</label>
                <input className="form-control" placeholder="Enter le role" value={role} onChange={e => setRole(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Nom</label>
                <input className="form-control" placeholder="Enter le nom" value={nom} onChange={e => setNom(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Prénom</label>
                <input className="form-control" placeholder="Enter le prénom" value={prenom} onChange={e => setPrenom(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Ajouter</button>
        </form>
        </div>
        </div>
      </div>
    );
    
}

export default Creation;