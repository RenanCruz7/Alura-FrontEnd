let idade = 17
idade = idade +2
console.log(idade)

/*-------------------------------------*/

var cidade = ['Santos', 'Guarujá', 'São Vicente']
console.log(cidade)
/**--------------------------- */
cidade.push('Bertioga') /** add um novo elemento no final da lista */
console.log(cidade)
/**--------------------------- */
cidade.pop() /** exclui o ultimo elemento da lista */
console.log(cidade)
/**--------------------------- */
console.log(cidade.length) /** quantidade de elementos presente na lista*/

console.log(cidade[1]) /** index */

/*cidade.splice(0,2) /**Remover um item pela posição do índice */
console.log(cidade)

/**Remover do início do Array*/
cidade.shift()
console.log(cidade)

/** Adicionar ao início do Array */
cidade.unshift('Berlim')
console.log(cidade)