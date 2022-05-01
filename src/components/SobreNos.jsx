import '../css/SobreNos.css'

export default function SobreNos(){
    return(
        <div className="sobre__nos" id="sobreNos">
            <h2>Sobre Nós</h2>
            <div className="sobre__nos__container">
                <img src="images/toa/sobre-nos.png" className="sobre__nos__img" alt="icon sobre nós"/>
                <div className="sobre__nos__text">
                    <h3>Dvadi's</h3>
                    <p>Fundado em 1998, por Dvadi Silva, empresário e dono das empresas DSV.</p>
                    <p>Dvadi's foi o primeiro cabeleireiro na sua época a fazer o impossível, juntou num espaço, cabelos vindos de todas as partes do mundo, incluindo cabelos em guerra. Vindos de estados inimigos, encontravam aqui um local de paz e harmonia, o convívio era apreciado por todos, tornando-se o local de peregrinação escolhido.</p>
                </div>
            </div>
        </div>
    );
}