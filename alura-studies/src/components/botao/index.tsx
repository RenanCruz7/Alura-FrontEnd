import React from 'react'
import './style.scss'

class Botao extends React.Component{
    render(): React.ReactNode {
        return(
            <button className='botao'>Enviar</button>
        )
    }
}

export default Botao;