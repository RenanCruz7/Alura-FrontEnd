import styled from 'styled-components'

const Cabecalho = () =>{

    const Header = styled.header`
        display: flex;
        justify-content: space-around;
        padding-top: 120px;
    `

    const ImagemLogo = styled.div`
        background-image: url("https://raw.githubusercontent.com/alura-cursos/sorteador-de-amigo-secreto/aula-1/public/imagens/logo.png");
        width: 351px;
        height: 117px;
    `

    return(
        <>
        <Header></Header>
        <ImagemLogo role='img'></ImagemLogo>
        </>
    )
}
export default Cabecalho