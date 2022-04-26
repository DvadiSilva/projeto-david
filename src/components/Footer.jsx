import '../css/Footer.css'

export default function Footer(){
    return(
        <footer>      
            <div className="media">
                <a href="#1">
                    <img src="images/media/facebook.png" alt="facebook"/>
                </a>
                <a href="#1">
                    <img src="images/media/instagram.png" alt="instagram"/>
                </a>
                <a href="#1">
                    <img src="images/media/twitter.png" alt="twitter"/>
                </a>
            </div>
            <p>Desenvolvido por: David Silva Vieira</p>
            <p>Dvadi's 2022 | Todos os direitos reservados</p>
        </footer>
    );
}