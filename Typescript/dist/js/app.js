import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form'); //coleta o elemento do DOM
//quando o botao é pressionado o metodo controller.adiciona é chamado 
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
