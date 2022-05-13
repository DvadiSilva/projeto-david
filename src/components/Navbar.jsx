import { useState } from "react";
import { NavLink } from "react-router-dom";

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
                        <img src="/images/logo/Dvadi_logo-preto.png" alt="Dvadi's" className="logo"/>
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
                        <a href="/#sobreNos">Sobre Nós</a>
                    </li>
                    <li className="nav__list__item">
                        <a href="/#contactos">Contactos</a>
                    </li>
                    <li className="nav__list__item">
                        <a href="/#cabelopedia">Cabelopédia</a>
                    </li>
                    <li>
                        <button type="button" className="hamburguerBtn" onClick={toogleIsHidden}>
                            <img src="/images/toa/hamburguer-menu.png" alt="nav expandida"/>
                        </button>
                    </li>
                </ul>
            </nav>
            {!isHidden && <HamburguerMenu/>}
        </header>
    );
}