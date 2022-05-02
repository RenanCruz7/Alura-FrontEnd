import {Cliente} from "./cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente()
const contaCorrenteRenan = new ContaCorrente()

cliente1.nome = "Renan"
cliente1.cpf = 50924618884
contaCorrenteRenan.cliente = cliente1
contaCorrenteRenan.agencia = 10
contaCorrenteRenan.depositar(500)
/** ------------------------------------------------------------------------------------------- */
const cliente2 = new Cliente()
const contaCorrenteMatheus = new ContaCorrente()
cliente2.nome = "Matheus"
cliente2.cpf = 77788866688
contaCorrenteMatheus.agencia = 10
/** ------------------------------------------------------------------------------------------- */
const conta2 = new ContaCorrente()
conta2.cliente = cliente2
conta2.agencia = 102
/** ------------------------------------------------------------------------------------------- */

console.log(contaCorrenteRenan)
console.log(conta2)

contaCorrenteRenan.transferir(200, conta2)
console.log(conta2)


