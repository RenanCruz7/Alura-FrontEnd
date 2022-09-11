export class Negociacao {

    // Typescript permite a declaracao das propriedades no proprio construtor da classe diminuindo a quantidade de codigo
    constructor(
        private _data:Date,
        private readonly quantidade:number,
        private readonly valor:number){
    
    }

    get data(): Date{
        const data = new Date(this._data.getTime())
        return this.data
    }

    get volume(): number{
        return (this.quantidade * this.valor)
    }


}