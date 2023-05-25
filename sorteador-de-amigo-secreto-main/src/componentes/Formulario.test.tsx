import { render, screen } from "@testing-library/react"
import React from "react"
import Formulario from "./Formulario"

test('quando o input esta vazio, os novos participantes não podem ser adicionados',()=>{

    render(<Formulario/>)

    //Encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

    //Encontrar no DOM o botao
    const botao = screen.getByRole('button')


    //Garantir que o input esteja no Formulario
    expect(input).toBeInTheDocument()

    //Garatir que o botão esteja desabilitado
    expect(botao).toBeDisabled()


})