import React, {useState, useEffect} from "react";
import Keys from '../constants/keys';
import Cookies from 'universal-cookie';
import { Redirect} from 'react-router-dom'

const cookies = new Cookies();

const CreationFiche = (props) => {

    const [error, setError] = useState("");
    const [id, setId] = useState("");
    const [nommission, setNommission] = useState("");
    const [client, setClient] = useState("");
    const [ville, setVille] = useState("");
    const [departement, setDepartement] = useState("");
    const [anneedeb, setAnneedeb] = useState("");
    const [anneefin, setAnneeFin] = useState("");
    const [domaine, setDomaine] = useState("");
    const [montant, setMontant] = useState("");
    const [image, setImage] = useState("");
    const [details, setDetails] = useState("");
    const [fiches, setFiches] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('../../datamocked/fichemock.json');
            const json = await result.json();
            setFiches(json);
            console.log(json);
        };
        fetchData();
    }, [])

    const handleSubmit = (e) => {
    }

    return (
        <div className="auth-wrapper marg400" >
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">NomMission</th>
                <th scope="col">Client</th>
                <th scope="col">Ville</th>
                <th scope="col">Departement</th>
                <th scope="col">AnneeDebut</th>
                <th scope="col">AnneeFin</th>
                <th scope="col">Montant</th>
                <th scope="col">Details</th>
                <th scope="col">Image</th>
                <th scope="col">Domaine</th>
                </tr>
            </thead>
            <tbody>
            { Object.entries(fiches).length > 0 && fiches.map(fiche => {
                return <tr>
                <th scope="row">{fiche.id}</th>
                <td>{fiche.nomMission}</td>
                <td>{fiche.client}</td>
                <td>{fiche.ville}</td>
                <td>{fiche.departement}</td>
                <td>{fiche.anneeDebut}</td>
                <td>{fiche.anneeFin}</td>
                <td>{fiche.montant}</td>
                <td>Le Lorem Ipsum est simplement du faux texte...</td>
                <td>{fiche.image}</td>
                <td>{fiche.domaine}</td>
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
                <label>Id</label>
                <input className="form-control" placeholder="Enter l' identifiant" value={id} onChange={e => setId(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Nom mission</label>
                <input  className="form-control" placeholder="Nom mission" value={nommission} onChange={e => setNommission(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Client</label>
                <input className="form-control" placeholder="Nom client" value={client} onChange={e => setClient(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Ville</label>
                <input className="form-control" placeholder="Nom ville" value={ville} onChange={e => setVille(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Département</label>
                <input className="form-control" placeholder="Nom departement" value={departement} onChange={e => setDepartement(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Annee deb</label>
                <input className="form-control" placeholder="Annee deb" value={anneedeb} onChange={e => setAnneedeb(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Annee fin</label>
                <input className="form-control" placeholder="Annee fin" value={anneefin} onChange={e => setAnneeFin(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Domaine</label>
                <input className="form-control" placeholder="Domaine" value={domaine} onChange={e => setDomaine(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Montant</label>
                <input className="form-control" placeholder="Enter le Montant" value={montant} onChange={e => setMontant(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Image</label>
                <input className="form-control" placeholder="Image" value={image} onChange={e => setImage(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Details</label>
                <input className="form-control" placeholder="details" value={details} onChange={e => setDetails(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Ajouter fiche</button>
        </form>
        </div>
        </div>
      </div>
    );
    
}

export default CreationFiche;