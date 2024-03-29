export abstract class View<T>{


    // tanto o pai e as filhas da classe podem acessar a propriedade
    protected elemento: HTMLElement

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    update(model:T): void{
        const template = this.template(model)
        this.elemento.innerHTML = template
    }

    protected abstract template(model: T): string
}