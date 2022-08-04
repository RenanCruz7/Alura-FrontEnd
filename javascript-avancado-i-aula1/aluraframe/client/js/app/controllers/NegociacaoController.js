class NegociacaoController{

    constructor(){
        this._inputData = document.querySelector('#data')
        this._inputQuantidade = document.querySelector('#quantidade')
        this._inputValor = document.querySelector('#valor')
    }

    adiciona(event){
        event.preventDefault()
        
        let data = new Date(...
            this._inputData.value
            .split('-')
            .map(function(item,indice){
                if(indice == 1){
                    return item - 1
                }
                return item
            }))
            console.log(data)
       
    }
}