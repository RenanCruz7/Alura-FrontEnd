export class Conta{
    constructor(saldoInicial,cliente,agencia){
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }

    get saldo(){
        return this._saldo
    }
    // set é usado para definir um valor para alguma propriedade
    set cliente(novoValor){
        if(novoValor  instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente(){
        this._cliente
    }
    
    sacar(valor){

        let taxa =1
        const valorSacado = taxa * valor
        this._saldo -=valorSacado
        return valorSacado;
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