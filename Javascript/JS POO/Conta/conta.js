// Classe Abstrata
// usada somente para ser herdada e nunca inicializada diretamente

export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor == Conta) {
      throw new Error('Voce nao deveria instanciar um objeto do tipo Conta');
    }

    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  get saldo() {
    return this._saldo;
  }
  // set é usado para definir um valor para alguma propriedade
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    this._cliente;
  }

  // Metodo Abstrato
  sacar(valor) {
    throw new Error('O Metodo sacar da conta é abstrato');
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    this._saldo -= valorSacado;
    return valorSacado;
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
    }
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
