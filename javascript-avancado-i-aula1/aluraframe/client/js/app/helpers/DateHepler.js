class DateHelper{
    
    constructor(){
        throw new Error('DateHelper não pode ser instanciada')
    }


    static textoParaData(texto){
        return new Date(...texto.split('-').map((item,indice)=> item - indice % 2))
    }

    static dataParaTexto(data){
        return data.getDate()
        + '/' + (data.getMonth() + 1)
        + '/' + data.getFullYear()
    }
}

// utilizando static em JS eu posso invocar os metodos da classe sem precisar criar um instancia da classe 