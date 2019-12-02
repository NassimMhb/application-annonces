import React from "react";
import Cookies from 'universal-cookie';
import Keys from '../constants/keys';

const cookies = new Cookies();

const Home = () => {

    const username = cookies.get(Keys.usernameKey);

    return (
        <div className="auth-wrapper">
        <div className="auth-inner">
        <div>Bienvenue sur le site {username} </div></div></div>
    );
}

export default Home;
