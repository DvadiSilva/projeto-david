import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

export default function HamburguerMenu(props){
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
                    <NavHashLink smooth to="/#sobreNos">Sobre Nós</NavHashLink>
                </li>
                <li>
                    <NavHashLink smooth to="/#contactos">Contactos</NavHashLink>
                </li>
                <li>
                    <NavHashLink smooth to="/#cabelopedia">Cabelopédia</NavHashLink>
                </li>
                <li>
                    <button type="button" className="navClose" onClick={props.isHidden}>X</button>
                </li>
            </ul>
        </nav>
    );
}