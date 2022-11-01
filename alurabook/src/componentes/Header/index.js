import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`


function Header(){
    return (
    <HeaderContainer>
        <Logo/> {/* nesta linha estou exibindo o componente*/}
        <OpcoesHeader/>
        <IconesHeader/>
    </HeaderContainer>
    )
}

export default Header