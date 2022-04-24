console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;


var cidades = ['Salvador','São Paulo','Rio de Janeiro']

console.log("Quantidade de elementos na lista:",cidades.length)

console.log('                   ')

/** Indexação */
var first = cidades[0]
var second = cidades[1]
var third = cidades[2]

console.log("Imprime",first)
console.log("Imprime",second)
console.log("Imprime",third)

/*
-Adicionar um item ao final do Array
*/
var adicionar = cidades.push('Distrito Federal','Manaus')
console.log(cidades)
/*
-Remover um item do final do Array
*/
var remover = cidades.pop()
console.log(cidades)

console.log('                              ')

/*
-Adicionar um item ao inicio do Array
*/
var adicionar = cidades.unshift('Guarujá')
console.log(cidades)
/*
-Remover um item do inicio do Array
*/
var remover = cidades.shift()
console.log(cidades)

console.log('                              ')

/*
-Procurar o índice de um item na Array
*/
var pos = cidades.indexOf('Rio de Janeiro')
console.log(pos)

console.log('                              ')

/*
Remover um item pela posição do índice
*/
var removeItem = cidades.splice(pos,1)
console.log(cidades)
