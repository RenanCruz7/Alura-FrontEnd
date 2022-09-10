export class Negociacoes {
    constructor() {
        /**
        array que vai guardar todas as negociacoes que forem cadastradas
        <Negociacao> mostra que apenas os valores das negociacoes serão aceitos dentro do array
        */
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
