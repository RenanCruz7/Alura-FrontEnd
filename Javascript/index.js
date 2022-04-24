/**---------------------------------------------------------------------------------------- */
class Cliente{
    nome
    cpf
}
class ContaCorrente{
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
/**---------------------------------------------------------------------------------------- */
const cliente1 = new Cliente()
const contaCorrenteRenan = new ContaCorrente()

cliente1.nome = "Renan"
cliente1.cpf = 50924618884
contaCorrenteRenan.agencia = 10
contaCorrenteRenan.saldo = 1000

const cliente2 = new Cliente()
const contaCorrenteMatheus = new ContaCorrente()

cliente2.nome = "Matheus"
cliente2.cpf = 77788866688

contaCorrenteMatheus.agencia = 10
contaCorrenteMatheus.saldo = 1000

/**
console.log(cliente1)
console.log(contaCorrenteRenan)

console.log("                        ")

console.log(cliente2)
console.log(contaCorrenteMatheus)

console.log("                        ")
console.log('sua conta ficou com o seguinte saldo após o saque: ',contaCorrenteRenan.saldo)

contaCorrenteMatheus.depositar(-500)
console.log(contaCorrenteMatheus)
*/
const valorSacado =contaCorrenteRenan.sacar(500)
console.log(valorSacado)


