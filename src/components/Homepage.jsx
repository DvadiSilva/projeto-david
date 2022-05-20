import { CabeloPedia } from "./CabeloPedia";
import Contactos from "./Contactos";
import Hero from "./Hero";
import Servicos from "./Servicos";
import SobreNos from "./SobreNos";
import BackToTop from "./BackToTop";

export default function Homepage(){
    return(
        <main>
            <Hero/>
            <Servicos/>
            <SobreNos/>
            <Contactos/>
            <CabeloPedia/>
            <BackToTop/>
        </main>
    );
}