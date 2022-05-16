import {items} from "../produtos.js";
import StoreItem from "./StoreItem.jsx";
import '../css/Store.css';
import { useState } from "react";
import Pagamento from "./Pagamento.jsx";


export default function Store(){
    const [carrinho, setCarrinho]= useState([]);
    const [inputs, setInputs] = useState( Array(items.length).fill(0));
    const [noCarrinho, setNoCarrinho]= useState(0);
    const [subtotals, setSubtotals] = useState(items.map(item=> item.subtotal));
    const [total, setTotal]= useState(0);
    const [pagamento, setPagamento]= useState(false);
    const [pagamentoData, setPagamentoData]= useState({
        metodo: "Multibanco",
        morada: ""
    });
    const [metodoEscolhido, setMetodoEscolhido]= useState(false);
    const [referencia, setReferencia]= useState(0);
    const [numero, setNumero]= useState();
    const [mbWaySubmitted, setMbWaySubmitted]=useState(false);


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

    function removeAllItems(id, item){  //função para remover todos os items do carrinho de um produto
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
        }else{
            item.subtotal= 0;
        }
        setSubtotals(items.map(item=> item.subtotal));
        randomNumber(100, 1000);
    }

    function refreshTotal(){    //atualizar o total
        setTotal(subtotals.reduce((total, numeroAtual)=> total+ numeroAtual));
    }

    function calculateTotal(){  //calcular o valor a pagar
        refreshTotal();
        setPagamento(prevState=> !prevState);
    }

    function handleChangePagamento(event){  //verificar a escolha do método de pagamento
        const {name, value, type}= event.target;

        setPagamentoData(prevState=>({
            ...prevState,
            [name]: type==="radio"? pagamentoData.metodo=value : pagamentoData.morada=value,
        }));
    }

    function handleSubmit(event){
        event.preventDefault();
        
        randomNumber(100, 1000);
        setMetodoEscolhido(true);
    }

    function randomNumber(min, max){
        setReferencia(
            (Math.floor(Math.random()*(max - min)) + min)+" "+
            (Math.floor(Math.random()*(max - min)) + min)+" "+
            (Math.floor(Math.random()*(max - min)) + min)
        );
    }

    function handleChangeNumero(event){
        setNumero(event.target.value);
    }

    function handleSubmitNumero(event){
        event.preventDefault();
        
        setMbWaySubmitted(true);
    }

    return(
        <main className="store">
            {!mbWaySubmitted?
                <div className="carrinhoBtn__container">{noCarrinho===0? null: noCarrinho}
                    <button type="button" className="carrinhoBtn" onClick={()=>calculateTotal()}>
                        <img src="/images/toa/cart.png" alt="imagem carrinho"/>
                    </button>
                </div>
                :
                null
            }
            {!pagamento?
                <div>
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
                        {
                            (subtotals.reduce((total, numeroAtual)=> total+ numeroAtual))!==0?
                            <p className="total">Total do carrinho:<span>{subtotals.reduce((total, numeroAtual)=> total+ numeroAtual)}€</span></p>
                            :
                            null
                        }
                    </div>
                </div>
                :
                <div>
                    {!mbWaySubmitted?
                        <div>
                            <button type="button" onClick={()=>calculateTotal()}>voltar</button>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <p>Escolha o método de pagamento</p>
                                    <div>
                                        <label>
                                            Multibanco
                                            <input 
                                                type="radio" 
                                                value="Multibanco" 
                                                name="metodoPagamento" 
                                                required 
                                                checked={pagamentoData.metodo=== "Multibanco"} 
                                                onChange={handleChangePagamento}
                                            />
                                        </label>
                                        <label>
                                            MB Way
                                            <input 
                                                type="radio" 
                                                value="MBWay" 
                                                name="metodoPagamento" 
                                                checked={pagamentoData.metodo=== "MBWay"} onChange={handleChangePagamento}
                                            />
                                        </label>
                                        <label>
                                            Paypal
                                            <input 
                                                type="radio" 
                                                value="PayPal" 
                                                name="metodoPagamento" 
                                                checked={pagamentoData.metodo=== "PayPal"} onChange={handleChangePagamento}
                                            />
                                        </label>
                                        <label>
                                            Apple Pay
                                            <input 
                                                type="radio" 
                                                value="ApplePay" 
                                                name="metodoPagamento" 
                                                checked={pagamentoData.metodo=== "ApplePay"} onChange={handleChangePagamento}
                                            />
                                        </label>
                                    </div>
                                    <label>
                                        Morada
                                        <input 
                                            type="text" 
                                            required 
                                            name="morada" 
                                            onChange={handleChangePagamento} placeholder="Avenida D.Nuno Álvares Pereira Nº22 Loja 18"
                                        />
                                    </label>
                                    <button type="submit">Enviar</button>
                                </form>
                            </div>
                            {
                                pagamentoData.morada!=="" && metodoEscolhido?
                                <p>A entrega será feita em {pagamentoData.morada}</p>
                                : 
                                null
                            }

                            <Pagamento 
                                pagamentoData={pagamentoData} 
                                total={total} 
                                referencia={referencia} 
                                refreshTotal={refreshTotal} 
                                metodoEscolhido={metodoEscolhido} 
                                mbWaySubmitted={mbWaySubmitted} 
                                handleChangeNumero={handleChangeNumero} 
                                handleSubmitNumero={handleSubmitNumero}
                            />
                        </div>
                        :
                        <p>A aguardar Pagamento de {numero}...</p>
                    }
                </div>
            }
        </main>
    );
}