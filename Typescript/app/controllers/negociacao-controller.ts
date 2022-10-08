import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"
import { NegociacoesView } from "../views/negociacoes-view.js"

export class NegociacaoController{
    // HTMLInputElement - é o tipo das nossas propriedades
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes: Negociacoes = new Negociacoes()
    private negociacoesView = new NegociacoesView('#negociacoesView') // busca pelo ID negociacoesView no HTML

    constructor(){
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
        this.negociacoesView.update(this.negociacoes) 
    }

    /** 
    Por enquanto os valores retornados por criaNegociacao sao impressos no console
    e apos isso é feito a limpeza dos campos de input para que seja inserido os prox valores
    */
    adiciona(): void{
        const negociacao = this.criaNegociacao()
        this.negociacoes.adiciona(negociacao) // adiciona os valores do input dentro de negociacoes
        this.negociacoesView.update(this.negociacoes) // atualiza a view com os valores de negociacoes
        console.log(this.negociacoes.lista())
        this.limparFormulario()
    }

    /**
    Cria uma negociaçao com os valores que sao coletados do input
    porem antes é feito um tratamento dos tados ja que .value
    retorna os dados em string e não é o que queremos
    */
    criaNegociacao(): Negociacao{
        const exp = /-/g
        const date = new Date(this.inputData.value.replace(exp, ','))
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)
        return new Negociacao(date,quantidade,valor)
    }
    /** 
    Limpa o formulario após o envio das informaçoes e coloca o foco no input de data
    para que o usuario possa continuar cadastrando novas negociacoes
    */
    limparFormulario():void{
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus()
    }
}