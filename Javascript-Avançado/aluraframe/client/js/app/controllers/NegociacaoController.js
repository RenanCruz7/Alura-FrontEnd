class NegociacaoController{

    constructor(){ //construtor para fazer a coleta dos dados do formulario
        this._inputData = document.querySelector('#data')
        this._inputQuantidade = document.querySelector('#quantidade')
        this._inputValor = document.querySelector('#valor')
        this._listaNegociacoes = new ListaNegociacoes()

        this._negociacoesView = new NegociacoesView(document.querySelector('#negociacoesView'))
        this._negociacoesView.update(this._listaNegociacoes)

        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView(document.querySelector('#mensagemView'))
        this._mensagemView.update(this._mensagem)
    }

    adiciona(event){
        event.preventDefault() //previne o comportamento padrao da pagina ao atualizar quando o envio do form é feito

        this._listaNegociacoes.adiciona(this._criaNegociacao())
        this._negociacoesView.update(this._listaNegociacoes)

        this._mensagem.texto = 'Negociação adicionada com sucesso!!'
        this._mensagemView.update(this._mensagem)

        
        this._limpaFormulario()
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value)
    }

    _limpaFormulario(){
        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0

        this._inputData.focus()
    }
}