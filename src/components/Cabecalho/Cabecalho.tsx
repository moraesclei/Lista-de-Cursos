/* 
-- estou criando um compoente utilizando uma constante 
-- ao criar o componente a const vai reclamar, pois precisamos exportar esse componente usando o export conforme abaixo e ja temos acesso ha esse componente lá na pg principal.
*/

import { CabecalhoContainer, Logo } from "./Cabecalho.style";

const Cabecalho = () =>{
    return ( 
       <CabecalhoContainer>
            <div>
                <Logo src="/images/myteacher.png" />
            </div>

            <p>Encontre o professor perfeito!</p>
       </CabecalhoContainer>
    )
}

export default Cabecalho;