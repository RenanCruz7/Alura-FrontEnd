import styled from 'styled-components'

const Cabecalho = () =>{

    const Header = styled.header`
        display: flex;
        justify-content: space-around;
        padding-top: 120px;
        @media screen and (max-width: 800px) {
            padding-top: 60px;
            flex-direction: column;
            align-items: center;
        }
    `

    const ImagemLogo = styled.div`
        background-image: url("https://raw.githubusercontent.com/alura-cursos/sorteador-de-amigo-secreto/aula-1/public/imagens/logo.png");
        width: 351px;
        height: 117px;

        @media screen and (max-width: 800px){
            background-image: url("https://raw.githubusercontent.com/alura-cursos/sorteador-de-amigo-secreto/aula-1/public/imagens/logo-pequeno.png");
            width: 235px;
            height: 199px;
        }
    `
    const ImagemParticipante = styled.img`
        z-index: 1;
        height: auto; /* Mantém a proporção original da imagem */
    `

    return(
        <>
        <Header></Header>
        <ImagemLogo role='img'></ImagemLogo>
        <ImagemParticipante src='https://raw.githubusercontent.com/alura-cursos/sorteador-de-amigo-secreto/aula-1/public/imagens/participante.png'></ImagemParticipante>
        </>
    )
}
export default Cabecalho