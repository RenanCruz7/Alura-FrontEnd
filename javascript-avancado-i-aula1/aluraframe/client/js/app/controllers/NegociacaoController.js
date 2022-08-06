class NegociacaoController{

    constructor(){ //construtor para fazer a coleta dos dados do formulario
        this._inputData = document.querySelector('#data')
        this._inputQuantidade = document.querySelector('#quantidade')
        this._inputValor = document.querySelector('#valor')
    }

    adiciona(event){
        event.preventDefault() //previne o comportamento padrao da pagina ao atualizar quando o envio do form é feito
        
        /*
         Neste trecho de codigo abaixo eu faço a transformação da data de string para object assim como a formatação da mesma

         caso tenha duvidas consultar o seguinte curso: Javascript: conhecendo o Browser - Aula 3 completa
        */
        let data = new Date(
            ...this._inputData.value
            .split('-')
            .map((item,indice)=> item - indice % 2)) // arrow function 
        
        
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        )

        // formata a data para a forma de dd/mm/yyyy como usamos normalmente 
        let diaMesAno = negociacao.data.getDate()
        + '/' + (negociacao.data.getMonth() + 1)
        + '/' + negociacao.data.getFullYear()
        console.log(diaMesAno)
    }
}