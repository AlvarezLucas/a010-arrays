
//EXERCICIO01
// Crie uma array tipo String 
const arrayString = ["caderno", "garrafa", "agua"]
console.log(arrayString)

// Crie uma array tipo Number
const arrayNumber = [34, 102, 3]
console.log(arrayNumber)

// Crie um array com uma String, um número e um booleano
const arrayMisto = ["Bom dia", 2022, false]
console.log(arrayMisto)

// Crie um array com apenas um valor. Um número
const unico = [50]
console.log(unico)

// Crie um array sem nenhum valor dentro.
const vazio = []
console.log(vazio)

//EXERCICIO2
// Cheque o LENGTH(tamanho) do primeiro array. O que acontece se tentarmos acessar o indice 3 desta array?
console.log(arrayString.length)

console.log(arrayString[3])
// imprimiu underfined pq nao existe indice 3
//outro exemplo
console.log("acessar indice 3", arrayString [3])
console.log("acessar terceiro intem:", arrayString [2])

// Verifique se o terceiro array inclui cada um dos itens
console.log(arrayMisto.includes("Bom dia"))

//No quarto array, imprima o valor do único item. Observe qual o seu índice, e imprima seu tamanho
console.log(unico)
console.log(unico[0])

console.log("tamanho do array", unico.length)

//exercicio 3
//Crie uma copia do primeiro array
const copia = arrayString.slice()
console.log(arrayString)
console.log(copia)

//faca push da nova string
copia.push("celular")

console.log(copia)
console.log(arrayString)
 
// remover itens do indice 2 e 3 do array copia

copia.splice(2,2)
console.log(copia)

//Exercicio de fixacao
//1- crie uma nova, ela deve possuir apenas numeros, e estes numeros nao devem seguir nenhuma ordem especifica. Por enquanto nao vamos imporimir

const apenasNumeros = [25, 52, 12, 30, 44, 96]

// 2- Crie uma copia desta array utilizando o metodo slice

const copiaNumeros = apenasNumeros.slice()

console.log(apenasNumeros)

//3- remova o ultimo item do primeiro array, e em seguida adicione o 6
copiaNumeros.pop()
copiaNumeros.push(6)
console.log(copiaNumeros)

//4- remova o numero que esta no indice 2 do segundo array
copiaNumeros.splice(2,1)
console.log(copiaNumeros)
