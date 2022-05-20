import '../css/Cabelopedia.css'

export function CabeloPedia(){
    return(
        <div className="cabelopedia" id="cabelopedia">
            <h2>Cabelopédia</h2>
            <section className="introducao">
                <h3>Tipos de cabelo: saiba quais são e como identificar o seu</h3>
                <h4>Muitas pessoas podem não ligar, mas conhecer o seu tipo de cabelo e suas características é importante para utilizar os produtos adequados e deixá-lo mais saudável.</h4>
                <p>Sabia que existem pelo menos <span>9 tipos de cabelo</span> que vão do liso ao crespo?</p>
                <p>Existe um sistema de classificação criado pelo cabeleireiro norte-americano Andre Walker, este sistema divide-se em categorias e subcategorias e utiliza números e letras que vão de 1A a 4C. Para entender melhor o que estamos a falar, veja a imagem seguinte</p>
                <img src="/images/cabelopedia/12-hair.png" alt=""/>
                <p><span>Tipo 1 cabelos lisos:</span> são os cabelos lisos e que não apresentam curvas, tem 3 subcategorias.</p>
                <p><span>Tipo 2 cabelos ondulados:</span> possui também 3 subcategorias que diferenciam a textura dos fios e das curvas. Possuem mais forma e movimento.</p>
                <p><span>Tipo 3 cabelos encaracolados:</span> são aqueles caracois mais soltos ou definidos.</p>
                <p><span>Tipo 4 cabelos crespos:</span> são fios mais enrolados desde a raiz e divididos em 3 classificações.</p>
            </section>
            <section className="cabelo__liso">
                <h3>Cabelo Liso</h3>
                <img src="/images/cabelopedia/cabelo-liso.jpg" alt=""/>
                <p><span>Cabelo liso 1A:</span> geralmente, este cabelo é bem liso e escorrido e chega a ser difícil manter algum acessório ou penteado nele por algum tempo. Por outro lado, é um tipo de cabelo que costuma ser mais oleoso e brilhante. Ou seja, se é o seu caso, invista em produtos que limpem profundamente o couro cabeludo para controlar a oleosidade.</p>
                <p><span>Cabelo liso 1B:</span> em primeiro lugar, este tipo de cabelo possui fios mais grossos e encorpados, apesar de ainda ser liso. Se você quiser mantê-lo brilhante e mais alinhado, aplique o condicionador só nas pontas.</p>
                <p><span>Cabelo liso 1C:</span> são fios bem mais grossos que no tipo 1B, pesados, retos e brilhantes. Por essas características, é bom utilizar produtos que removam bem a oleosidade da raiz. Este tipo de cabelo é muito comum entre os orientais.</p>
            </section>
            <section className="cabelo__ondulado">
                <h3>Cabelo Ondulado</h3>
                <img src="/images/cabelopedia/cabelo-ondulado.webp" alt=""/>
                <p><span>Cabelo ondulado 2A:</span> é um quase liso que possui fios em formato de S bem suave e leve. Isto que dizer que o fio na raiz é liso e segue assim até as pontas, que ganham pequenos movimentos. Em resumo: se for o seu tipo de cabelo, utilize produtos leves como gel e mousse para não deixá-lo pesado.</p>
                <p><span>Cabelo ondulado 2B:</span> apesar deste tipo ainda ter ondas em formato de S, os seus fios são mais definidos e tendem a apresentar mais frizz no topo da cabeça. Para manter os fios sempre bonitos, aposte em produtos a base de gel ou mousse.</p>
                <p><span>Cabelo ondulado 2C:</span> por último, essa categoria possui fios mais grossos e com bastante volume, além da curva em “S” ser mais acentuada. Portanto, é aconselhável utilizar finalizadores e cremes ativadores de cachos mais leves.</p>
            </section>
            <section className="cabelo__encaracolado">
                <h3>Cabelo Encaracolado</h3>
                <img src="/images/cabelopedia/cabelo-cacheado.jpg" alt=""/>
                <p><span>Cabelo encaracolado 3A:</span> esta categoria apresenta a formação de caracóis que crescem desde a raiz ou a partir do meio do cabelo. Costuma ter muito brilho e é fácil de modelar.</p>
                <p><span>Cabelo encaracolado 3B:</span> em princípio, esse cabelo tem cachos mais definidos, apertados e com ondulações em espiral. Ele é o equilíbrio entre o 3A e 3C. Nesse caso, o indicado é utilizar cremes ativadores de caracois e com controle de frizz, pois eles também costumam ser mais secos.</p>
                <p><span>Cabelo encaracolado 3C:</span> geralmente, são fios mais finos e frágeis, o que significa cuidados constantes na hidratação. Além do mais, os cachos são super definidos, fechados e estreitos.</p>
            </section>
            <section className="cabelo__crespo">
                <h3>Cabelo Crespo</h3>
                <img src="/images/cabelopedia/cabelo-crespo.jpg" alt=""/>
                <p><span>Cabelo crespo 4A:</span> também conhecidos como cabelos afros, este tipo forma fios bem enrolados a partir da raiz e tem bastante volume. Os caracois em espiral parecem molinhas. Por conta disso, a sua estrutura frágil e fina merece uma atenção especial, como hidratação e evitar lavagens todos os dias.</p>
                <p><span>Cabelo crespo 4B:</span> em segundo lugar, esse tipo de cabelo tem mechas menos definidas, mas que formam um Z (zigue-zague). Assim como no 4A, são fios também finos e que podem apresentar um aspecto ressecado. Desse modo, não deixe a hidratação de lado e desembarace os fios com um pente de dentes largos para não quebrá-los.</p>
                <p><span>Cabelo crespo 4C:</span> por fim, chegamos ao último tipo de cabelo e não menos importante. Ele é considerado o mais frágil entre os três e possui também os fios em formato zigue-zague, porém com algumas áreas sem nenhuma definição. Vale caprichar em produtos potentes para hidratação, além de tratamentos com óleos.</p>
            </section>
        </div>
    );
}