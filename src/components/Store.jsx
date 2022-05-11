import {items} from "../produtos.js";
import StoreItem from "./StoreItem.jsx";
import '../css/Store.css';
import { useState } from "react";


export default function Store(){
    const [carrinho, setCarrinho]= useState([]);
    const [inputs, setInputs] = useState( Array(items.length).fill(0));
    const [noCarrinho, setNoCarrinho]= useState(0);
    const [subtotals, setSubtotals] = useState(items.map(item=> item.subtotal));
    const [total, setTotal]= useState(subtotals.reduce((total, numeroAtual)=> total+ numeroAtual));

    function handleClick(item, index){ //função para enviar items para o carrinho
        const carrinhoCopy= [...carrinho];
        const inputsCopy= [...inputs];
       
        if(inputsCopy[index]>0 && inputsCopy[index]<=item.quantidade){

            if((item.noCarrinho+inputsCopy[index]<=item.quantidade)){
                
                for(let i=0; i<inputsCopy[index]; i++){

                    if(carrinhoCopy.includes(item)){
                        item.noCarrinho= item.noCarrinho+1;
                        setNoCarrinho(prevState=> prevState+1);
                    }
                    else{
                        carrinhoCopy.push(item);
                        item.noCarrinho=1;
                        setNoCarrinho(prevState=> prevState+1);
                    }
                }
            }
            calculateSubtotal(item);
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
    
    function addItem(item){     //função para add items ao carrinho
        const carrinhoCopy= [...carrinho];

        if(item.noCarrinho<item.quantidade){
            item.noCarrinho= item.noCarrinho+1;
            setNoCarrinho(prevState=> prevState+1);
        }

        calculateSubtotal(item);
        setCarrinho(carrinhoCopy);
    }

    function removeItem(item, index){   //função para remover items do carrinho
        const carrinhoCopy= [...carrinho];
        
        if(item.noCarrinho===1){
            carrinhoCopy.splice(index, 1);

            item.noCarrinho= item.noCarrinho-1;
            setNoCarrinho(prevState=> prevState-1);

        }else{
            item.noCarrinho= item.noCarrinho-1;
            setNoCarrinho(prevState=> prevState-1);
        }
        calculateSubtotal(item);
        setCarrinho(carrinhoCopy);
    }

    function removeAllItems(id, item){
        const carrinhoCopy= [...carrinho];

        const newCarrinhoCopy= carrinhoCopy.filter(item=>item.id!==id);

        if(carrinho.length===1){
            setNoCarrinho(0);
        }else{
            setNoCarrinho(newCarrinhoCopy.map(item=>item.noCarrinho).reduce((total, numeroAtual)=> total+ numeroAtual));
        }

        item.noCarrinho= 0;

        calculateSubtotal(item);
        setCarrinho(newCarrinhoCopy);
    }

    function calculateSubtotal(item){ //função para calcular subtotal de cada item
        if(item.noCarrinho!==0){
            item.subtotal= item.noCarrinho*item.preco;
            setSubtotals(items.map(item=> item.subtotal));
        }else{
            item.subtotal= 0;
            setSubtotals(items.map(item=> item.subtotal));
        }
    }

    function calculateTotal(){
        setTotal(subtotals.reduce((total, numeroAtual)=> total+ numeroAtual));
    }

    return(
        <main className="store">
            <div className="carrinhoBtn__container">{noCarrinho===0? null: noCarrinho}
                <button type="button" className="carrinhoBtn" onClick={()=>calculateTotal()}>
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
                                <p className="item__nome">{item.nome}</p>
                                <div>
                                    <button type="button" className="trashBtn" onClick={()=>removeAllItems(item.id, item)}>
                                        <img src="/images/toa/trash-icon.png" alt=""/>
                                    </button>
                                    <div className="item__noCarrinho">
                                        <button type="button" onClick={()=>removeItem(item, index)}>-</button>
                                        <p>{item.noCarrinho}</p>
                                        <button type="button" onClick={()=>addItem(item)}>+</button>
                                    </div>
                                    <p className="item__subtotal">{item.preco*item.noCarrinho}€</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                {(subtotals.reduce((total, numeroAtual)=> total+ numeroAtual))!==0?
                    <p className="total">Total do carrinho:<span>{subtotals.reduce((total, numeroAtual)=> total+ numeroAtual)}€</span></p>
                    : null
                }
            </div>
        </main>
    );
}