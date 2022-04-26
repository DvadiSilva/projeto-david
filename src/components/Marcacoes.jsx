import { useState } from "react";

export default function Marcacoes(){
    const [value]= useState("default");
    const [formSubmitted, setFormSubmitted]= useState(false);
    const [mesAtual]= useState(new Date().getMonth()+1);
    const [anoAtual]= useState(new Date().getFullYear());

    
    const [marcacao, setMarcacao]= useState({
        nome:"",
        telefone:"",
        email:"",
        semana:"",
        dia:"",
        horario:"",
    })

    function handleChange(event){
        const {name, value}= event.target;

        setMarcacao(prevState=> ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(event){
        event.preventDefault();
        
        setFormSubmitted(true);
    }
    
    return(
        <main>
            {formSubmitted? null: <h2>Faça a sua marcação aqui</h2>} 
            {formSubmitted? <h3>{marcacao.nome}, a sua marcação para {marcacao.dia}, às {marcacao.horario} horas está em processamento, obrigado</h3>:
                (<form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Nome
                            <input type="text" name="nome" required onChange={handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Telemóvel
                            <input type="tel" name="telefone" pattern="[0-9]{9}" minLength="9" maxLength="9"required onChange={handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Email
                            <input type="email" name="email" required onChange={handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Semana do mês
                            <select name="semana" required defaultValue={value} onChange={handleChange}>
                                <option value="default" disabled>...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="date" name="calendario" 
                            min={mesAtual>9? `${anoAtual}-${mesAtual}-15`:`${anoAtual}-0${mesAtual}-15`}
                            max={mesAtual>9? `${anoAtual}-${mesAtual}-14`:`${anoAtual}-0${mesAtual}-14`}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Dia
                            <select name="dia" required defaultValue={value} onChange={handleChange}>
                                <option value="default" disabled>...</option>
                                <option value="Terça-feira">3ª Feira</option>
                                <option value="Quarta-feira">4ª Feira</option>
                                <option value="Quinta-feira">5ª Feira</option>
                                <option value="Sexta-feira">6ª Feira</option>
                                <option value="Sábado">Sábado</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Horário
                            <select name="horario" required defaultValue={value} onChange={handleChange}>
                                <option value="default" disabled>...</option>
                                <option value="9">9:00h</option>
                                <option value="10">10:00h</option>
                                <option value="11">11:00h</option>
                                <option value="12">12:00h</option>
                                <option value="15">15:00h</option>
                                <option value="16">16:00h</option>
                                <option value="17">17:00h</option>
                                <option value="18">18:00h</option>
                                <option value="19">19:00h</option>
                            </select>
                        </label>
                    </div>
                    <button type="submit">Enviar</button>
                </form>)
            }
        </main>
    );
}