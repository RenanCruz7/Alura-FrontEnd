import React from 'react'
import style from './Botao.module.scss'

class Botao extends React.Component{
    render(): React.ReactNode {
        return(
            <button className={style.botao}>Enviar</button>
        )
    }
}

export default Botao;