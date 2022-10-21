/* -- aqui aprendi como criar uma outra página. Obs: Para que eu possa visualizar a pg Contato eu digito /contato no browser.
-- aqui estou declarando a marcação de uma nova pg.
-- aqui está sendo criada uma constante (home do tipo "NextPage") 
-- Um componete é uma parte da nossa aplicação que pode ser reutilizada.
*/


import type { NextPage } from "next";

const Contato: NextPage = () =>{
    return(
        <div>Contato</div>
    )
}
    
export default Contato;

