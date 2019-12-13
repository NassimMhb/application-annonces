import React, {useState, useEffect} from "react";
import Cookies from 'universal-cookie';
import Keys from '../constants/keys';
import { Redirect} from 'react-router-dom'
import Autocomplete from './autocomplete.component';

const cookies = new Cookies();

const Fiche = (props) => {


    const [fiches, setFiches] = useState({});

    const tabAuto = [];

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

    if(Object.entries(fiches).length > 0) {
        fiches.map(fiche => {   
            tabAuto.push(fiche.id);
            tabAuto.push(fiche.nomMission);
            tabAuto.push(fiche.client);
            tabAuto.push(fiche.ville);
            tabAuto.push(fiche.departement);
            tabAuto.push(fiche.anneeDebut);
            tabAuto.push(fiche.anneeFin);
            tabAuto.push(fiche.domaine);
        })
    }


    return (
           <>
                 <Autocomplete
                    suggestions={tabAuto}
                />
            <div className="parentDivFiche">
            { Object.entries(fiches).length > 0 && fiches.map(fiche => {
                return <div key={fiche.id} className="divFiche">
                    <span>id: {fiche.id}</span>
                    <br />
                    <span>nomMission: {fiche.nomMission}</span>
                </div>      
                })}
             </div>
                </>
    );
}

export default Fiche;
