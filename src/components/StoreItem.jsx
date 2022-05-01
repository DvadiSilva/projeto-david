import '../css/StoreItem.css';

export default function StoreItem(props){
    return(
        <div className="storeItem">
            <img src={props.img} alt="imagem do item"/>
            <h3>{props.nome}</h3>
            <p>Preço: {props.preco}€</p>
            <div>
                <input type="number" aria-label="quantidade a adicionar" min="0" max={props.quantidade}/>
                <button type="button">+</button>
            </div>
        </div>
    );
}