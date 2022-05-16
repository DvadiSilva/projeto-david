export default function Pagamento(props){
    return(
        <div>
            {
                props.metodoEscolhido?
                <div>
                    {
                        props.pagamentoData.metodo==="PayPal" || props.pagamentoData.metodo==="ApplePay"?
                        <p>Em breve...</p>
                        : 
                        props.pagamentoData.metodo==="Multibanco"?
                        <div>
                            <img src="/images/toa/multibanco-icon.png" alt=""/>
                            <dl>
                                <dt>Entidade</dt>
                                <dd>11473</dd>
                                <dt>Referência</dt>
                                <dd>{props.referencia}</dd>
                                <dt>Montante</dt>
                                <dd>{props.total}€</dd>
                            </dl>
                        </div>
                        :
                        <div>
                            {!props.mbWaySubmitted?
                                <form onSubmit={props.handleSubmitNumero}>
                                    <img src="/images/toa/mbway-icon.png" alt=""/>
                                    <input type="tel" name="telefone" pattern="[9]{1}[0-9]{8}" minLength="9" maxLength="9" arial-label="número de telemóvel" placeholder="912345678"required onChange={props.handleChangeNumero}/>
                                    <button type="submit">Pagar</button>
                                </form>
                                :
                                null
                            }
                        </div>
                    }
                </div>
                : 
                null
            }
        </div>
    );
}