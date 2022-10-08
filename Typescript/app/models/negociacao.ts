export class Negociacao {

    // Typescript permite a declaracao das propriedades no proprio construtor da classe diminuindo a quantidade de codigo
    constructor(
        private _data:Date,
        public readonly quantidade:number,
        public readonly valor:number){
    
    }

    get data(): Date{
        const data = new Date(this._data.getTime())
        return data
    }

    get volume(): number{
        return (this.quantidade * this.valor)
    }


}