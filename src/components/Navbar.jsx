import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import '../css/Navbar.css'
import HamburguerMenu from "./HamburguerMenu";

export default function Navbar(){
    const [isHidden, setIshidden]= useState(true);

    function toogleIsHidden(){
        setIshidden( prevState=> !prevState);
    }

    return(
        <header>
            <nav>
                <h1>
                    <NavLink to="/">
                        <img src="/images/logo/Dvadi_logo-preto.png" alt="logo" className="logo"/>
                    </NavLink>
                </h1>
                <ul>
                    <li className="nav__list__item">
                        <NavLink to="/store">Loja Online</NavLink>
                    </li>
                    <li className="nav__list__item">
                        <NavLink to="/marcacoes">Marcações</NavLink>
                    </li>
                    <li className="nav__list__item">
                        <NavLink to="/precos">Preços</NavLink>
                    </li>
                    <li className="nav__list__item">
                        <NavHashLink smooth to="/#sobreNos">Sobre Nós</NavHashLink>
                    </li>
                    <li className="nav__list__item">
                        <NavHashLink smooth to="/#contactos">Contactos</NavHashLink>
                    </li>
                    <li className="nav__list__item">
                        <NavHashLink smooth to="/#cabelopedia">Cabelopédia</NavHashLink>
                    </li>
                    <li>
                        <button type="button" className="hamburguerBtn" onClick={toogleIsHidden}>
                            <img src="/images/toa/hamburguer-menu.png" alt="nav expandida"/>
                        </button>
                    </li>
                </ul>
            </nav>
            {!isHidden && <HamburguerMenu isHidden={toogleIsHidden}/>}
        </header>
    );
}