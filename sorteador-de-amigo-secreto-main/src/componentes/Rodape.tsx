import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"
import styled from 'styled-components'

const RodapeConfig = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        RodapeConfig {
            flex-direction: column;
        }
    }
    & > img{
        margin-top: 32px;
    }
`
const Botao = styled.button`
    width: 350px;
    height: 80px;
    font-size: 20px;
    box-shadow: 2px 2px 0px 1px #000000;
    border-radius: 45px;
    background-color: #FE652B;
    color: #FFF;
    cursor: pointer;

    &:disabled{
        opacity: 0.6;
        cursor: not-allowed;
    }
    &:hover{
        background-color: #4B69FD;
    }

    @media screen and (max-width: 800px) {
        & {
            width: 220px;
            margin: 32px 0;
        }
    }
`


const Rodape = () =>{
    const participantes = useListaDeParticipantes()

    const navegarPara = useNavigate()

    const iniciar = () => {
        navegarPara('/sorteio')
    }

    return(
        <RodapeConfig>
            <Botao disabled={participantes.length < 3} onClick={iniciar}>Iniciar Brincadeira</Botao>
            <img src="https://raw.githubusercontent.com/alura-cursos/sorteador-de-amigo-secreto/aula-3/public/imagens/sacolas.png" alt="Sacolas de Compras"></img>
        </RodapeConfig>
    )
}

export default Rodape