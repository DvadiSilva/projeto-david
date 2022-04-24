import '../css/Contactos.css'

export default function Contactos(){
    return(
        <div className="contactos">
            <h2>Contactos</h2>
            <div className="contactos__container">
                <div className="contactos__item">
                    <h3>Horário</h3>
                    <div className="contactos__horario">
                        <p>Terça a Sábado das 9h às 20h</p>
                        <p>Hora de almoço das 13h às 15h</p>
                    </div>
                </div>
                <div className="contactos__item">
                    <h3>Morada</h3>
                    <div className="contactos__morada">
                        <p>Av. Dom Nuno Álvares Pereira</p>
                        <p>Agualva Cacém, Nº22/24 Loja 18</p>
                    </div>
                </div>
                <div className="contactos__item">
                    <h3>Telefone</h3>
                    <p>213456789</p>
                </div>
                <div className="contactos__item">
                    <h3>Email</h3>
                    <p>dvadi_silva@mail.com</p>
                </div>
            </div>
            <div className="contactos__iframe">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.5225820283663!2d-9.297156313986827!3d38.767981270886786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ece1419ef673f%3A0x9de2a9b69c047fd4!2sAv.%20Dom%20Nuno%20%C3%81lvares%20Pereira%2024%2C%202735-147%20Agualva-Cac%C3%A9m!5e0!3m2!1spt-PT!2spt!4v1650643250628!5m2!1spt-PT!2spt" allowFullScreen="" title="mapa" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}