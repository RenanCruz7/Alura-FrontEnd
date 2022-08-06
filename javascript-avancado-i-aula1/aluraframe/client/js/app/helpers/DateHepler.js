class DateHelper{
    
    constructor(){
        throw new Error('DateHelper não pode ser instanciada')
    }


    static textoParaData(texto){

        //expressao regular que verificar se o ao usar o metodo o formato da data está correto
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd')

        return new Date(...texto.split('-').map((item,indice)=> item - indice % 2))
    }

    static dataParaTexto(data){

        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
    }
}

// utilizando static em JS eu posso invocar os metodos da classe sem precisar criar um instancia da classe 