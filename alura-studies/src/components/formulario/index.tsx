import React from 'react'
import Botao from '../botao'
import style from './Formulario.module.scss'

class Formulario extends React.Component{
    state = {
        tarefa:"",
        tempo: "00:00"
    }
    render(): React.ReactNode {
        return(
            <form className={style.novaTarefa}>
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
                    <input value={this.state.tempo} onChange={evento =>this.setState({...this.state, tempo: evento.target.value})} type='time' step='1' name='tempo' id='tempo' min='00:00:00' max='01:30:00' required></input>
                </div>
                <Botao> Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario