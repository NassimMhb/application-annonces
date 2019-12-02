import React, {useState, useEffect} from "react";
import Cookies from 'universal-cookie';
import Keys from '../constants/keys';
import { Redirect} from 'react-router-dom'

const cookies = new Cookies();

const Fiche = (props) => {

    const [fiches, setFiches] = useState({});

    console.log("deeded");
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('../../datamocked/fichemock.json');
            const json = await result.json();
            setFiches(json);
            console.log(json);
        };
        fetchData();
    }, []);

    return (
           props.isAuthenticated ? 
            <div className="parentDivFiche">
            { Object.entries(fiches).length > 0 && fiches.map(fiche => {
                return <div key={fiche.id} className="divFiche">
                    <span>id: {fiche.id}</span>
                    <br />
                    <span>nomMission: {fiche.nomMission}</span>
                </div>      
                })}
             </div>
           : 
            <Redirect to={{ pathname: '/accueil' }} />
    );
}

export default Fiche;
