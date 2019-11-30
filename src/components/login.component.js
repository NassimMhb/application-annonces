import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Se connecter</h3>

                <div className="form-group">
                    <label>Adrese email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Mot de passe</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Se connecter</button>
            </form>
        );
    }
}
