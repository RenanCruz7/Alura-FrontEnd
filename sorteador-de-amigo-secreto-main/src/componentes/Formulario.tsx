import { useState, useRef } from "react"
import { useAdicionarParticipante } from "../state/hook/userAdicionarParticipante"
import { useMensagemDeErro } from "../state/hook/useMensagemDeErro"
import styled from 'styled-components'

const GrupoInputBtn = styled.div`
    margin-bottom: 32px;

    & > input{
        border-top-left-radius: 45px;
        border-bottom-left-radius: 45px;
        height: 82px;
        width: 70%;
        box-sizing: border-box;
        padding-left: 32px;
        font-size: 20px;
        border: 2px solid black;
        box-shadow: 0px 2px 0px 1px #000000;
    }

    & > input:focus{
        outline: none;
    }

    & > button{
        border-top-right-radius: 45px;
        border-bottom-right-radius: 45px;
        height: 82px;
        width: 30%;
        box-sizing: border-box;
        border: 2px solid black;
        font-size: 20px;
        color: #000000;
        box-shadow: 2px 2px 0px 1px #000000;
        cursor: pointer;
        background-color: #c4c4c4;
    }

    & > button:hover{
         opacity: 0.8;
    }

    & > button:disabled{
        opacity: 0.6;
        cursor: not-allowed;
    }

    @media screen and (max-width:800px){
        & > input{
            display: block;
            width: 100%;
            border-radius: 45px;
            box-shadow: 0px 2px 0px 1px #000000;    
            margin-bottom: 18px;
        }
        & > button{
            display: block;
            margin-top: 16px;
            margin: 0 auto;
            width: 220px;
            border-radius: 45px;
        }
    }
`
const Formulario = () => {

    const [nome, setNome] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarNaLista = useAdicionarParticipante()

    const mensagemDeErro = useMensagemDeErro()

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()
    }

    return (
        <form onSubmit={adicionarParticipante}>
            <GrupoInputBtn>
                <input
                    ref={inputRef}
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                    type="text"
                    placeholder="Insira os nomes dos participantes">
                </input>
                <button disabled={!nome}>Adicionar</button>
            </GrupoInputBtn>
            {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
        </form>
    )
}

export default Formulario