import { Negociacao } from "./negociacao";

export class Negociacoes{
    /**
    array que vai guardar todas as negociacoes que forem cadastradas
    <Negociacao> mostra que apenas os valores das negociacoes serão aceitos dentro do array
    */
    private negociacoes: Array<Negociacao> = []

    // adiciona um novo valor para o array
    adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao)
    }

    lista():Array<Negociacao>{
        return this.negociacoes
    }
}