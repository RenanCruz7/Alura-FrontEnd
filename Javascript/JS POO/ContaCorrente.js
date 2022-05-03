import { Cliente } from "./cliente.js"

export class ContaCorrente{
    static numeroContas = 0
    agencia
    _cliente
    _saldo = 0

    constructor(cliente,agencia){
        this.cliente = cliente
        this.agencia = agencia
        ContaCorrente.numeroContas += 1
    }

    get saldo(){
        return this._saldo
    }

    set cliente(novoValor){
        if(novoValor  instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente(){
        this._cliente
    }

    sacar(valor){
        this._saldo -=valor
        return valor;
    }

    depositar(valor){
        if(valor >0){
            this._saldo+=valor
        }
    }

    transferir (valor,conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}