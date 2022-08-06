class NegociacaoController{

    constructor(){ //construtor para fazer a coleta dos dados do formulario
        this._inputData = document.querySelector('#data')
        this._inputQuantidade = document.querySelector('#quantidade')
        this._inputValor = document.querySelector('#valor')
    }

    adiciona(event){
        event.preventDefault() //previne o comportamento padrao da pagina ao atualizar quando o envio do form é feito

        let helper = new DateHelper()
        let data = helper.textoParaData(this._inputData.value)
        
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        )
        console.log(negociacao)

        console.log(helper.dataParaTexto(negociacao.data))
    }
}