import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <header>
            <nav>
                <h1>
                    <NavLink to="/">
                        <img src="/images/logo/Dvadi_logo-preto" alt="logo"/>
                    </NavLink>
                </h1>
                <ul>
                    <li>
                        <NavLink to="/store">Loja Online</NavLink>
                    </li>
                    <li>
                        <NavLink to="/marcacoes">Marcações</NavLink>
                    </li>
                    <li>
                        <NavLink to="/precos">Preços</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Sobre Nós</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Contactos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">Cabelopédia</NavLink>
                    </li>
                    <li>
                        <button type="button">
                            <img src="/images/toa/hamburguer-menu.png"/>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}