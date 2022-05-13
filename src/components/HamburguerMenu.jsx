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
                    <a href="/#sobreNos">Sobre Nós</a>
                </li>
                <li>
                    <a href="/#contactos">Contactos</a>
                </li>
                <li>
                    <a href="/#cabelopedia">Cabelopédia</a>
                </li>
            </ul>
        </nav>
    );
}