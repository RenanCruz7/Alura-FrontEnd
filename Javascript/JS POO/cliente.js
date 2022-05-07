export class Cliente{
    nome
    _cpf

    /** Get = pegar portanto nao vou poder alterar o valor do CPF quando ele for passado 
     pela primeira vez
    */
    get cpf(){
        return this._cpf
    }
    //O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
    constructor(nome,cpf){
        this.nome = nome
        this._cpf = cpf
    }
}