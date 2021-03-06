import { Gerente } from './funcionario/Gerente.js';
import { Diretor } from './funcionario/Diretor.js';
import { SistemaAutenticacao } from './sistemaAutenticacao.js';
import { Cliente } from './cliente.js';

const diretor = new Diretor('Matheus', 10000, 12345678900);
diretor.cadastrarSenha('123456');
const gerente = new Gerente('Renan', 5000, 12345678911);
gerente.cadastrarSenha('180607');

const GerenteEstaLogado = SistemaAutenticacao.login(gerente, '180607');
console.log(GerenteEstaLogado);

const DiretorEstaLogado = SistemaAutenticacao.login(diretor, '123456');
console.log(DiretorEstaLogado);

const cliente = new Cliente('Lais', 12345678900, 78910);
const ClienteEstaLogado = SistemaAutenticacao.login(cliente, '78910');
console.log(ClienteEstaLogado);

/*
Encapsular os dados de uma aplicação significa evitar que estes sofram acessos indevidos
Para isso, é criada uma estrutura que contém métodos que podem ser utilizados por qualquer outra classe, sem causar inconsistências no desenvolvimento de um código.
*/
