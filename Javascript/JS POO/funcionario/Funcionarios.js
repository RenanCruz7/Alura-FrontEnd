export class Funcionario {
  constructor(nome, salario, cpf) {
    this._nome = nome;
    this._salario = salario;
    this._cpf = cpf;

    this._bonificacao = 1;
    this._senha;
  }

  autenticar(senha) {
    return senha == this._senha;
  }
  cadastrarSenha(senha) {
    this._senha = senha;
  }
}
//Polimorfismo
/**
 Basicamente o polimorfismo é  a habilidade de uma entidade receber um objeto
 gerado a partir de uma subclasse e tratá-lo de forma genérica, como se fosse
 um objeto da superclasse.

O interessante é que como os objetos recebidos são diferentes, mas sempre do mes
mo tipo da superclasse, isso faz com que ele reaja de maneira diferente de acordo
com o objeto que está recebendo

site: http://contembits.com.br/minicursos/poo/Polimorfismo.aspx
 */
