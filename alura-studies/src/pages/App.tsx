import React, {useState} from 'react';
import { Cronometro } from '../components/Cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import style from './App.module.scss';
import { ITarefa } from '../types/tarefas';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] |[]>([])
  const [selecionado,setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  
  return (
    <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas}></Formulario>
        <Lista 
        tarefas={tarefas} 
        selecionaTarefa={selecionaTarefa}
        />
        <Cronometro selecionado ={selecionado}></Cronometro>
    </div>
  )
}

export default App;
