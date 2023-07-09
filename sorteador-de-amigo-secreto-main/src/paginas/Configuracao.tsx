import Formulario from "../componentes/Formulario"
import ListaParticipantes from "../componentes/ListaParticipante"
import Rodape from "../componentes/Rodape"
import Card from "../componentes/card"

const Configuracao = () =>{
    return(
       <Card>
            <section>
                <h2>Vamos Começar</h2>
                <Formulario></Formulario>
                <ListaParticipantes></ListaParticipantes>
                <Rodape></Rodape>
            </section>
       </Card>
    )
}

export default Configuracao