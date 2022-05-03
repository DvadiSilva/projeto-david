import '../css/Precos.css';

export default function Precos(){
    return(
        <main className="precos">
            <h2>Tabela de preços</h2>
            <div className="precos__container">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th colSpan={3}>Cabelo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Nome</th>
                            <th>Curto (€)</th>
                            <th>Médio (€)</th>
                            <th>Comprido (€)</th>
                        </tr>
                        <tr>
                            <td>Brushing</td>
                            <td>6.50</td>
                            <td>8.50</td>
                            <td>12.90</td>
                        </tr>
                        <tr>
                            <td>Corte</td>
                            <td>7.00</td>
                            <td>9.00</td>
                            <td>11.00</td>
                        </tr>
                        <tr>
                            <td>Coloração</td>
                            <td>17.90</td>
                            <td>19.90</td>
                            <td>23.90</td>
                        </tr>
                        <tr>
                            <td>Descoloração</td>
                            <td>17.90</td>
                            <td>20.90</td>
                            <td>24.90</td>
                        </tr>
                        <tr>
                            <td>Permanente</td>
                            <td>28.90</td>
                            <td>31.90</td>
                            <td>35.90</td>
                        </tr>
                        <tr>
                            <td>Madeixas</td>
                            <td>28.90</td>
                            <td>31.90</td>
                            <td>33.90</td>
                        </tr>
                        <tr>
                            <td>Madeixas com prata</td>
                            <td>31.90</td>
                            <td>33.90</td>
                            <td>35.90</td>
                        </tr>
                        <tr>
                            <td>Nuances</td>
                            <td>31.90</td>
                            <td>33.90</td>
                            <td>35.90</td>
                        </tr>
                        <tr>
                            <td>Alisamento</td>
                            <td>50.00</td>
                            <td>70.00</td>
                            <td>100.00</td>
                        </tr>
                        <tr>
                            <td>Tranças simples</td>
                            <td>10.00</td>
                            <td>15.00</td>
                            <td>20.00</td>
                        </tr>
                        <tr>
                            <td className="table__secundario">Boxeadora</td>
                            <td>20.00</td>
                            <td>40.00</td>
                            <td>60.00</td>
                        </tr>
                        <tr>
                            <td className="table__secundario">Embutida</td>
                            <td>20.00</td>
                            <td>40.00</td>
                            <td>60.00</td>
                        </tr>
                        <tr>
                            <td className="table__secundario">Raiz</td>
                            <td>30.00</td>
                            <td>50.00</td>
                            <td>70.00</td>
                        </tr>
                        <tr>
                            <td className="table__secundario">Box</td>
                            <td>50.00</td>
                            <td>70.00</td>
                            <td>100.00</td>
                        </tr>
                        <tr>
                            <td>Rastas (p/ unidade min.20)</td>
                            <td>5.00</td>
                            <td>10.00</td>
                            <td>15.00</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            
                            <td colSpan={4}>IVA Incluido</td>
                        </tr>
                    </tfoot>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preço (€)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ampolas</td>
                            <td>4.00</td>
                        </tr>
                        <tr>
                            <td className="table__secundario">Tratamento</td>
                            <td>5.00</td>
                        </tr>
                        <tr>
                            <td>Plix Côr</td>
                            <td>3.60</td>
                        </tr>
                        <tr>
                            <td>Creme Normal</td>
                            <td>3.00</td>
                        </tr>
                        <tr>
                            <td className="table__secundario">Especial</td>
                            <td>5.00</td>
                        </tr>
                        <tr>
                            <td className="table__secundario">Tratamento</td>
                            <td>5.00</td>
                        </tr>
                        <tr>
                            <td>Shampoo Especial</td>
                            <td>3.60</td>
                        </tr>
                        <tr>
                            <td>Coloração Direta</td>
                            <td>15.90</td>
                        </tr>
                        <tr>
                            <td>Laca Especial</td>
                            <td>1.50</td>
                        </tr>
                        <tr>
                            <td>Mascara</td>
                            <td>5.00</td>
                        </tr>
                        <tr>
                            <td className="table__secundario">Vapor</td>
                            <td>7.00</td>
                        </tr>
                        <tr>
                            <td>Aplicação de Acessórios (p/ unidade)</td>
                            <td>4.50</td>
                        </tr>
                        <tr>
                            <td>Pack Extensões</td>
                            <td>5.00</td>
                        </tr>
                        <tr>
                            <td>Limpeza Facial Profunda (75 min)</td>
                            <td>30.00</td>
                        </tr>
                        <tr>
                            <td>Correcção Ridulas e Rugas (75 min)</td>
                            <td>60.00</td>
                        </tr>
                        <tr>
                            <td>Manicure</td>
                            <td>6.00</td>
                        </tr>
                        <tr>
                            <td>Pedicure</td>
                            <td>15.00</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={2}>IVA Incluido</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </main>
    );
}