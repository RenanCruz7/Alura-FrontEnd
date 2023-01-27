import React from 'react'
import style from './Botao.module.scss'

class Botao extends React.Component<{texto: string}>{
    render(): React.ReactNode {
        return(
            <button className={style.botao} onClick={handleClick}>{this.props.texto}</button>
        )
    }
}

function handleClick(){
    alert('Teste de Função')
}

export default Botao;