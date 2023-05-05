import React from 'react'
import Botao from '../botao'
import style from './Formulario.module.scss'
import { ITarefa } from '../../types/tarefas'
import {v4 as uuidv4} from 'uuid'
import {useEffect, useState} from 'react'

interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario({setTarefas}: Props){
    const [tarefa,setTarefa] = useState('')
    const [tempo, setTempo] = useState('00:00')
    function adicionarTarefa(evento: React.FormEvent){
        evento.preventDefault()
        setTarefas(tarefasAntigas => 
            [
            ...tarefasAntigas,
                {   
                    tarefa,
                    tempo,
                    selecionado:false,
                    completado:false,
                    id: uuidv4()
                }
            ]
        )
        setTarefa("")
        setTempo('00:00')
}
return(
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor='tarefa'>
                        Adicione um novo estudo
                    </label>
                    <input value={tarefa} onChange={evento => setTarefa(evento.target.value)} type='text' name='tarefa'id='tarefa' placeholder='O que você quer estudar'required></input>
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor='tempo'>
                        Tempo
                    </label>
                    <input value={tempo} onChange={evento =>setTempo(evento.target.value)} type='time' step='1' name='tempo' id='tempo' min='00:00:00' max='10:00:00' required></input>
                </div>
                <Botao type="submit"> Adicionar</Botao>
            </form>
    )
}
export default Formulario