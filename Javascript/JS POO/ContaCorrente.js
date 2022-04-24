export class ContaCorrente{
    agencia
    saldo

    sacar(valor){
        this.saldo -=valor
        return valor;
    }

    depositar(valor){
        if(valor >0){
            this.saldo+=valor
        }
    }
}