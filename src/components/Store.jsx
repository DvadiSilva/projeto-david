import {items} from "../produtos.js";
import StoreItem from "./StoreItem.jsx";
import '../css/Store.css';
import { useState } from "react";


export default function Store(){
    const [carrinho, setCarrinho]= useState([]);
    const [inputs, setInputs] = useState( Array(items.length).fill(0));


    function handleClick(item, index){ //função para enviar items para o carrinho
        const carrinhoCopy= [...carrinho];
        const inputsCopy= [...inputs];
       
        if(inputsCopy[index]>0 && inputsCopy[index]<=item.quantidade){

            if((item.noCarrinho+inputsCopy[index]<=item.quantidade)){
                
                for(let i=0; i<inputsCopy[index]; i++){
                    carrinhoCopy.push(item);
                }
                item.noCarrinho=inputsCopy[index]+ item.noCarrinho;
            }
            
            setCarrinho(carrinhoCopy);
        }
    }

    function handleChange(index, event){ //função para obter valor do input
        if(event.target.value){

            const inputsCopy= [...inputs];
            
            inputsCopy[index]= parseInt(event.target.value);
            
            setInputs(inputsCopy);
        }
    }

    function removeItem(index, item){   //função para remover items do carrinho
        const carrinhoCopy= [...carrinho];

        carrinhoCopy.splice(index, 1);
        item.noCarrinho= item.noCarrinho-1;
        
        setCarrinho(carrinhoCopy);
    }

    return(
        <main className="store">
            <div className="carrinhoBtn__container">{carrinho.length===0? null: carrinho.length}
                <button type="button" className="carrinhoBtn">
                    <img src="/images/toa/cart.png" alt="imagem carrinho"/>
                </button>
            </div>
            <div className="store__container">
                {
                    items.map((item, index)=>(
                        <StoreItem
                            key={item.id}
                            nome={item.nome}
                            preco={item.preco}
                            img={item.img}
                            quantidade={item.quantidade}
                            noCarrinho={item.noCarrinho}
                            handleChange={(event)=>handleChange(index, event, item)}
                            handleClick={()=>handleClick(item, index)}
                        />
                    ))
                }
            </div>
            <div>
                <ul className="carrinho__container">
                    {
                        carrinho.map((item, index)=>(
                            <li key={index}>
                                {item.nome}
                                <button type="button" onClick={()=>removeItem(index, item)}>X</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </main>
    );
}