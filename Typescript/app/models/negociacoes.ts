import { Negociacao } from "./negociacao";

export class Negociacoes{
    /**
    array que vai guardar todas as negociacoes que forem cadastradas
    <Negociacao> mostra que apenas os valores das negociacoes serão aceitos dentro do array
    */
    private negociacoes: Negociacao[] = []

    // adiciona um novo valor para o array
    adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao)
    }
    //lista todos as negociacoes cadastradas - Readonly nao permite editar a lista com as negociacoes somente visualizar elas
    lista(): readonly Negociacao[]{
        return this.negociacoes
    }
}