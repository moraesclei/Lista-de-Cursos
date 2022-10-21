/* 
-- aqui vamos criar um componente estilizado usando a função "styled" e devemos importar seguido do "@mui/material".
-- na linha x estou que dentro dessa constante CabecalhoContainer a qual estou exportando vai ter o componente (styled - header) estilizado. 
*/

import { styled } from "@mui/material";


export const CabecalhoContainer = styled('header')`
    width: 230px;
    margin: 40px auto;
    text-align: center;
`;

export const Logo = styled('img')`
    width: 100%;
`;