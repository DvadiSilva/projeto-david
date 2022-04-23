import { NavLink } from "react-router-dom";

export default function HamburguerMenu(){
    return(
        <nav>
            <ul className="hamburguerMenu__list">
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
            </ul>
        </nav>
    );
}