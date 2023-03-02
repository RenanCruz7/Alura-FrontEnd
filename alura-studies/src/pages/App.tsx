import React, {useState} from 'react';
import { Cronometro } from '../components/Cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import style from './App.module.scss';
import { ITarefa } from '../types/tarefas';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] |[]>([])
  return (
    <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas}></Formulario>
        <Lista tarefas={tarefas}></Lista>
        <Cronometro></Cronometro>
    </div>
  )
}

export default App;
