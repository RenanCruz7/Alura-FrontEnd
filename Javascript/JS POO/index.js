import {Cliente} from "./cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { contaPoupança } from "./contaPoupança.js"
import { Conta } from "./conta.js"

const cliente1 = new Cliente("Renan",50924618884)
const contaCorrenteRenan = new ContaCorrente(cliente1,1001)
contaCorrenteRenan.depositar(500)
contaCorrenteRenan.sacar(100)


const contaPoupançaRenan = new contaPoupança(50,cliente1,1001)

console.log(contaPoupançaRenan)
console.log(contaCorrenteRenan)



