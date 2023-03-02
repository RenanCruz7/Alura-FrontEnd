import React from 'react'
import Botao from '../botao'
import style from './Formulario.module.scss'
import { ITarefa } from '../../types/tarefas'

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}>{
    state = {
        tarefa:"",
        tempo: "00:00"
    }
    adicionarTarefa(evento: React.FormEvent){
        evento.preventDefault()
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas,{...this.state}])
    }

    render(): React.ReactNode {
        return(
            <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor='tarefa'>
                        Adicione um novo estudo
                    </label>
                    <input value={this.state.tarefa} onChange={evento => this.setState({...this.state, tarefa: evento.target.value})} type='text' name='tarefa'id='tarefa' placeholder='O que você quer estudar'required></input>
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor='tempo'>
                        Tempo
                    </label>
                    <input value={this.state.tempo} onChange={evento =>this.setState({...this.state, tempo: evento.target.value})} type='time' step='1' name='tempo' id='tempo' min='00:00:00' max='10:00:00' required></input>
                </div>
                <Botao type="submit"> Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario