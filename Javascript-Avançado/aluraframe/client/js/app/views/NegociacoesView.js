class NegociacoesView extends View {

    constructor(elemento){
        super(elemento)
    }

    template(model) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${model._negociacoes.map(n => 
                    `
                        <tr>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `
                ).join('')}
            </tbody>

            <tfoot>
                    <td colspan="3"></td>
                    <td>${model._negociacoes.reduce((total, n) => total + n.volume,0.0)}</td>
            </tfoot>
        </table>
        `;
    }

}

/*
tbody -
 nele estou percorrendo a minha lista de negociações e para cada negociação eu estou criando uma nova lista com os dados daquela negociacao
 e no final usamos join() para unir todos os itens do array
*/