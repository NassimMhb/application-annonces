import React, { Component } from "react";
import Keys from '../constants/keys';
import Cookies from 'universal-cookie';

import { withRouter } from 'react-router-dom';

class Logout extends Component {
    render() {
        this.props.setAuthenticate(false, "Se connecter", "seconnecter");
        if (!this.props.isAuthenticated) 
        this.props.history.push('/accueil');
        return (
            <div>
            </div>
        );
    }
}

export default withRouter(Logout);