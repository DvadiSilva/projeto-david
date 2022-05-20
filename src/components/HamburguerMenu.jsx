import { NavLink } from "react-router-dom";

export default function HamburguerMenu(props){
    return(
        <nav>
            <ul className="hamburguerMenu__list">
                <li>
                    <NavLink to="/store" onClick={()=>props.toogleIsHidden()}>Loja Online</NavLink>
                </li>
                <li>
                    <NavLink to="/marcacoes" onClick={()=>props.toogleIsHidden()}>Marcações</NavLink>
                </li>
                <li>
                    <NavLink to="/precos" onClick={()=>props.toogleIsHidden()}>Preços</NavLink>
                </li>
                <li>
                    <a href="/#sobreNos" onClick={()=>props.toogleIsHidden()}>Sobre Nós</a>
                </li>
                <li>
                    <a href="/#contactos" onClick={()=>props.toogleIsHidden()}>Contactos</a>
                </li>
                <li>
                    <a href="/#cabelopedia" onClick={()=>props.toogleIsHidden()}>Cabelopédia</a>
                </li>
            </ul>
        </nav>
    );
}