import '../css/StoreItem.css';

export default function StoreItem(props){
    return(
        <div className="storeItem">
            <img src={props.img} alt=""/>
            <h3>{props.nome}</h3>
            <p>Preço: {props.preco}€</p>
            <div>
                <input 
                    type="number"
                    aria-label="quantidade a adicionar" 
                    min="0" 
                    max={props.quantidade}
                    onChange={(event)=> props.handleChange(event, props.item)}
                />
                <button type="button" onClick={() => props.handleClick(props.item)}>+</button>
            </div>
            <h4>{props.noCarrinho}</h4>
        </div>
    );
}