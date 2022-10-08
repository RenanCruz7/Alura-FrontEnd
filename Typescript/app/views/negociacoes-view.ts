import { Negociacoes } from "../models/negociacoes.js"

export class NegociacoesView{
    
    private elemento: HTMLElement
    
    // guarda um elemento do DOM dentro de seletor
    constructor(seletor: string){
        // colocar o valor de seletor dentro de elemento para usar ele na classe e identificarmos onde vamos colocar o nosso elemento HTML
       this.elemento = document.querySelector(seletor)  
    }

    template(model: Negociacoes): string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao =>{
                    return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                        </tr>
                    `
                }).join('')}
            </tbody>
        </table>
        `
    }
    update(model: Negociacoes): void{
        this.elemento.innerHTML = this.template(model)
    }
}