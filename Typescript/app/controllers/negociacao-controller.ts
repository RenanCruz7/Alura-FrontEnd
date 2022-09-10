import { Negociacao } from "../models/negociacao.js"

export class NegociacaoController{

    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement

    constructor(){
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
    }

    /** 
    Por enquanto os valores retornados por criaNegociacao sao impressos no console
    e apos isso é feito a limpeza dos campos de input para que seja inserido os prox valores
    */
    adiciona(): void{
        const negociacao = this.criaNegociacao()
        console.log(negociacao)
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
    /*
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