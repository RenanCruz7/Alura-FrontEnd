import './style.css'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'


function Header(){
    return (
    <header className="App-header">
        <Logo/> {/* nesta linha estou exibindo o componente*/}
        <OpcoesHeader/>
        <IconesHeader/>
    </header>
    )
}

export default Header