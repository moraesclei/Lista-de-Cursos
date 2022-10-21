/* -- aqui dentro do React utilizamos funções ou classes para criar nossos componentes */
/* podemos utilizar a div com o <cabecalho></cabecalho> dentro dessa div ou utilizar o elemento raiz também chamado de fragmento. */
/*essa Box funciona como uma div para estilizar a cor de fundo
  esse (sx) permite colocar comportamentos de uma forma direta */

import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'


const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "Professor 1",
      foto: "https://github.com/moraesclei.png",
      descricao: "Aula HTML",
      valor_hora: 100
    },
    {
      id: 2,
      nome: "Professor 2",
      foto: "https://github.com/moraesclei.png",
      descricao: "Aula JavaScript",
      valor_hora: 180
    },
    {
      id: 3,
      nome: "Professor 3",
      foto: "https://github.com/moraesclei.png",
      descricao: "Aula Python",
      valor_hora: 200
    },
    {
      id: 4,
      nome: "Professor 4",
      foto: "https://github.com/moraesclei.png",
      descricao: "Aula React",
      valor_hora: 250
    }
  ]

  return (
    <Box sx={{backgroundColor:'secondary.main'}}>
      <Lista professores={professores}></Lista>
    </Box>
  )
}

export default Home

