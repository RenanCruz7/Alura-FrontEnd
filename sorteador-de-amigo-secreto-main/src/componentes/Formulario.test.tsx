import { fireEvent, render, screen, act } from "@testing-library/react"
import React from "react"
import Formulario from "./Formulario"
import { RecoilRoot } from "recoil"


describe('O comportamento do Formulario.tsx', () => {

    test('quando o input esta vazio, os novos participantes não podem ser adicionados', () => {

        render(<RecoilRoot>
            <Formulario></Formulario>
        </RecoilRoot>)

        //Encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        //Encontrar no DOM o botao
        const botao = screen.getByRole('button')
        //Garantir que o input esteja no Formulario
        expect(input).toBeInTheDocument()
        //Garatir que o botão esteja desabilitado
        expect(botao).toBeDisabled()


    })

    test('adicionar um participante caso exista um nome preenchido', () => {
        render(<RecoilRoot>
            <Formulario></Formulario>
        </RecoilRoot>)
        //Encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        //Encontrar no DOM o botao
        const botao = screen.getByRole('button')
        // inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Lionel Messi'
            }
        })
        // clicar no botao de submeter
        fireEvent.click(botao)
        // garantir que o input esteja com o foco ativo
        expect(input).toHaveFocus()
        // garantir que o input nao tenha um valor
        expect(input).toHaveValue("")
    })

    test('nomes duplicados nao podem ser adicionados na lista', () => {
        render(<RecoilRoot>
            <Formulario></Formulario>
        </RecoilRoot>)
        //Encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        //Encontrar no DOM o botao
        const botao = screen.getByRole('button')
        // inserir um valor no input e enviar o valor
        fireEvent.change(input, {
            target: {
                value: 'Lionel Messi'
            }
        })
        fireEvent.click(botao)

        fireEvent.change(input, {
            target: {
                value: 'Lionel Messi'
            }
        })
        fireEvent.click(botao)

        const mensagemDeErro = screen.getByRole('alert')

        expect(mensagemDeErro.textContent).toBe('Nome duplicados não são permitidos')
    })

    test('a mensagem de erro deve sumir após os timers', () => {
        jest.useFakeTimers()

        render(<RecoilRoot>
            <Formulario></Formulario>
        </RecoilRoot>)
        //Encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        //Encontrar no DOM o botao
        const botao = screen.getByRole('button')
        // inserir um valor no input e enviar o valor
        fireEvent.change(input, {
            target: {
                value: 'Lionel Messi'
            }
        })
        fireEvent.click(botao)

        fireEvent.change(input, {
            target: {
                value: 'Lionel Messi'
            }
        })
        fireEvent.click(botao)

        let mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeInTheDocument()

        act(() => {
            jest.runAllTimers()
        });

        mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeNull()
    })
})
