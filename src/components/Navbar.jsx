import { NavLink } from "react-router-dom";

import '../css/Navbar.css'

export default function Navbar(){
    return(
        <header>
            <nav>
                <h1>
                    <NavLink to="/">
                        <img src="/images/logo/Dvadi_logo-preto.jpeg" alt="logo" className="logo"/>
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
                        <NavLink to="/">Sobre Nós</NavLink>
                    </li>
                    <li className="nav__list__item">
                        <NavLink to="/">Contactos</NavLink>
                    </li>
                    <li className="nav__list__item">
                        <NavLink to="/">Cabelopédia</NavLink>
                    </li>
                    <li>
                        <button type="button" className="hamburguerBtn">
                            <img src="/images/toa/hamburguer-menu.png" alt="nav expandida"/>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}