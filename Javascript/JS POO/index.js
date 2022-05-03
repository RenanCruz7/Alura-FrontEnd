import {Cliente} from "./cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Renan",50924618884)
const contaCorrenteRenan = new ContaCorrente(cliente1,1001)

const cliente2 = new Cliente("Matheus",77788866688)
const contaCorrenteMatheus = new ContaCorrente(cliente2,1002)

console.log(contaCorrenteRenan)
console.log(contaCorrenteMatheus)
console.log(ContaCorrente.numeroContas)




