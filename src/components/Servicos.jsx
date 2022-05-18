import '../css/Servicos.css'

export default function Servicos(){
    return(
        <div className="servicos">
            <h2>Serviços</h2>
            <div className="servicos__container">
                <div className="servicos__item">
                    <div className="servicos__img__container">
                        <img src="images/servicos_pics/Cabeleireiro.png" alt="" className="servicos__img"/>
                    </div>
                    <h3>Cabeleireiro</h3>
                </div>
                <div className="servicos__item">
                    <div className="servicos__img__container">
                        <img src="images/servicos_pics/Manicure.png" alt="" className="servicos__img"/>
                    </div>
                    <h3>Manicure e Pedicure</h3>
                </div>
                <div className="servicos__item">
                    <div className="servicos__img__container">
                        <img src="images/servicos_pics/Estética.png" alt="" className="servicos__img"/>
                    </div>
                    <h3>Estética</h3>
                </div>
                <div className="servicos__item">
                    <div className="servicos__img__container">
                        <img src="images/servicos_pics/especialidades.png" alt="" className="servicos__img"/>
                    </div>
                    <h3>Especialidades</h3>
                </div>
            </div>
        </div>
    );
}