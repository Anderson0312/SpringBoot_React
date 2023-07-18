import React from "react";
import {Link } from "react-router-dom"

const Profile = () => {
    return (
            <div>
                <h1>Pagina de Perfil</h1>
                {/*nested  routes */}
                <p>
                    <Link to="/profile/1">Perfil 1</Link>
                </p>
                <p>
                    <Link to="/profile/2">Perfil 2</Link>
                </p>
                <p>
                    <Link to="/profile/3">Perfil 3</Link>
                </p>
            </div>
        );
    };

export default Profile;