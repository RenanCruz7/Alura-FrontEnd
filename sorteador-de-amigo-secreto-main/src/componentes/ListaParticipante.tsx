import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes"

const ListaParticipantes = () =>{

    const participantes: String[] = useListaDeParticipantes()
    return(
        <ul>
            {participantes.map(participante =><li key={participante}>{participante}</li>)}
        </ul>
    )
}

export default ListaParticipantes