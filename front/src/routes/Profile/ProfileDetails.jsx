import React from "react";
import {Link, useParams} from "react-router-dom"

const Profile = () => {
    const {id} = useParams();
    return (
            <div>
                <h1>Pagina de Perfil</h1>
                <h2>Exibindo dados do Usuario {id}</h2>
                <Link to="/profile">Voltar</Link>
            </div>
        );
    };

export default Profile;