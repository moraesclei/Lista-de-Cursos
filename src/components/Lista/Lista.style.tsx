import { styled } from "@mui/material";


/*cima,baixo:0  laterais: auto */
export const ListaStyled = styled('ul')`
    width:100%;
    max-width: 900px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing(8, 2, 10, 2)}; /*cima:8,dir:2,baixo:10,esq:2*/

    display: grid;
    grid-template-columns:1fr 1fr;
    gap:${({ theme }) => theme.spacing(4)};

    ${({theme}) => theme.breakpoints.down('md')} {
        grid-template-columns:1fr;
        gap:${({ theme }) => theme.spacing(8)}; 
    }
`;

export const ListaVazia = styled('h2')`
    text-align: center;
    padding: ${({ theme }) => theme.spacing(20, 0)}; 
    /*cima,baix:160px - lados:0.Obs:lembrar da regra que ele está fazendo 20x8=160*/
`;

export const ItemLista = styled('li')`
    list-style: none;
`;

export const Foto = styled('img')`
    width: 65%;
`;

export const Informacoes = styled('div')`
    
`;

/*cima:16 dir:0 baix:0 esq:0*/
export const Nome = styled('h3')`
    margin: ${({ theme }) => theme.spacing(2, 0, 0, 0)};
`;

/* outra forma color: ${({theme})} => theme.palette.primary.main} */
export const Valor = styled('p')`
    margin:0;
    font-weight: bold;
    color: ${({ theme }) => theme.palette.primary.main}; 
`;
/* word-break - permite qe as palavr fiquem com qebra de linha*/
export const Descricao = styled('p')`
    word-break: break-word;
`;