export class Negociacao {
    // Typescript permite a declaracao das propriedades no proprio construtor da classe diminuindo a quantidade de codigo
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return (this.quantidade * this.valor);
    }
}
