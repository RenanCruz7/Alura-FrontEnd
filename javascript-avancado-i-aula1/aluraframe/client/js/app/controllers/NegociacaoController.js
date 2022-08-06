class NegociacaoController{

    constructor(){ //construtor para fazer a coleta dos dados do formulario
        this._inputData = document.querySelector('#data')
        this._inputQuantidade = document.querySelector('#quantidade')
        this._inputValor = document.querySelector('#valor')
        this._listaNegociacoes = new ListaNegociacoes()
    }

    adiciona(event){
        event.preventDefault() //previne o comportamento padrao da pagina ao atualizar quando o envio do form é feito

        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
        this._listaNegociacoes.adiciona(negociacao)
        console.log(this._listaNegociacoes.ImprimeNegociacoes)
    }
}