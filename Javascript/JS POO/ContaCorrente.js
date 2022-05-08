import { Conta } from "./conta.js"

export class ContaCorrente extends Conta{
    static numeroContas = 0
    constructor(cliente,agencia){
        super(0,cliente,agencia)
        ContaCorrente.numeroContas += 1
    }
}