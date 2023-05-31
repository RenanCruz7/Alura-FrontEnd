import { useRecoilValue, useSetRecoilState } from 'recoil'
import { erroState, listaParticipanteState } from "../atom"


export const useAdicionarParticipante = () =>{
    const setLista = useSetRecoilState(listaParticipanteState)
    const lista = useRecoilValue(listaParticipanteState)
    const setErro = useSetRecoilState(erroState)
    return (nomeDoParticipante: string) =>{
        if(lista.includes(nomeDoParticipante)){
            setErro('Nome duplicados não são permitidos')
            return
        }
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}