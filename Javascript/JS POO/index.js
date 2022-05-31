import { Gerente } from './funcionario/Gerente.js';
import { Diretor } from './funcionario/Diretor.js';
import { SistemaAutenticacao } from './sistemaAutenticacao.js';

const diretor = new Diretor('Matheus', 10000, 12345678900);
diretor.cadastrarSenha('123456');
const gerente = new Gerente('Renan', 5000, 12345678911);
gerente.cadastrarSenha('180607');

const estaLogado = SistemaAutenticacao.login(gerente, '180607');
console.log(estaLogado);
const estaLogado2 = SistemaAutenticacao.login(diretor, '123456');
console.log(estaLogado2);
