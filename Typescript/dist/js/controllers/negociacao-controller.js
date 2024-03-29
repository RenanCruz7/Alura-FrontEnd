import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView'); // busca pelo ID negociacoesView no HTML
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    /**
    Por enquanto os valores retornados por criaNegociacao sao impressos no console
    e apos isso é feito a limpeza dos campos de input para que seja inserido os prox valores
    */
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao); // adiciona os valores do input dentro de negociacoes
        this.negociacoesView.update(this.negociacoes); // atualiza a view com os valores de negociacoes
        this.mensagemView.update('Negociação adicionada com sucesso!!!');
        this.limparFormulario();
    }
    /**
    Cria uma negociaçao com os valores que sao coletados do input
    porem antes é feito um tratamento dos tados ja que .value
    retorna os dados em string e não é o que queremos
    */
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    /**
    Limpa o formulario após o envio das informaçoes e coloca o foco no input de data
    para que o usuario possa continuar cadastrando novas negociacoes
    */
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
