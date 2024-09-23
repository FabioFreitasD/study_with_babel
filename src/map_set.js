//map é um dicionario é um conjunto de chave e valores
let meuMap = new Map();
meuMap.set("nome", "Fabio");  //a função set serve para adicionar um item ao map
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome"); //para recuperar o valor podemos usar o get

console.log(nome);

//para recuperar a quantidade de atributos de uma chave podemos ultilizar o size
console.log(meuMap.size);

//para verificar se determinada função existe podemos utilizar o has
console.log(meuMap.has("sobrenome"))

//para limpar todos os itens dentro do map podemos usar a função clear
//meuMap.clear()

console.log(meuMap.size)

//podemos fazer a interação no map com o for
for (let chave of meuMap.keys()) {
    console.log(chave);
}

//para recuperar valores usamos o values
for (let valor of meuMap.values()) {
    console.log(valor);
}

//podemos fazer a interação pelas entradas(items que é composto pela chave e o valor)
//for (let entrada of meuMap.entries()) {
    //console.log(entrada);
//}

//podemos fazer a desestruturação dentro das entradas
for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

//para remover um item dentro de um map usamos o delete
meuMap.delete("stack");

console.log(meuMap)

// o set não possui a estrutura chave e valor e os valores não podem se repetir
const cpfs = new Set();
cpfs.add('41529731020')
cpfs.add('36199865090')
cpfs.add('09242529010')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor)
})

//podemos renover itens duplicados com o set dentro de um array
const array = ['fabio', 'josiane', 'derick', 'ezequiel', 'mayeli', 'mayeli', 'derick']

const arrayComoSet = new Set([...array])

//para transformar o set em um array
const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet)
console.log(arraySemItensDuplicados)
