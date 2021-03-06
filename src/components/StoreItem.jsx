import '../css/StoreItem.css';

export default function StoreItem(props){
    return(
        <div className="storeItem">
            <img src={props.img} alt=""/>
            <h3>{props.nome}</h3>
            <p>Preço: {props.preco}€</p>
            <div className="input__container">
                <input 
                    type="number"
                    aria-label="quantidade a adicionar" 
                    min="0" 
                    max={props.quantidade}
                    placeholder={0}
                    onChange={(event)=> props.handleChange(event, props.item)}
                />
                <button type="button" onClick={()=> props.handleClick(props.item)}>+</button>
            </div>
        </div>
    );
}