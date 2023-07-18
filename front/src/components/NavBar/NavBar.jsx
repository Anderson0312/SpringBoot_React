import React from "react";
import {Link }  from "react-router-dom";

const NavBar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/">Home</Link>
                <Link to="/cadastro">Cadastro</Link>
                <Link to="/login">Login</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/cadastroProducts">Cadastro de Produtos</Link>
            </nav>
        );
    };

export default NavBar;