import { Conta } from './conta.js';
export class contaPoupança extends Conta {
  constructor(saldoInicial, cliente, agencia) {
    super(saldoInicial, cliente, agencia);
  }
}
