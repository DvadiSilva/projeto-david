import {items} from "../produtos.js";
import StoreItem from "./StoreItem.jsx";
import '../css/Store.css';


export default function Store(){
    return(
        <main className="store">
            {
                items.map(item=>(
                    <StoreItem
                        key={item.id}
                        nome={item.nome}
                        preco={item.preco}
                        img={item.img}
                        quantidade={item.quantidade}
                        noCarrinho={item.noCarrinho}
                    />
                ))
            }
        </main>
    );
}