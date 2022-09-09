/* # Exercício 2

Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log */

const numero = [5, 25, 52, 152]

const strings = ["uva", "maca", "banana", "pessego"] 

const boleano = [5, "uva", true]

console.log(numero)
console.log(strings)
console.log(boleano)

// Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão)
console.log(numero.length)
console.log(strings.length)
console.log(boleano.length)

// Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(numero[0])
console.log(strings[1])
console.log(boleano[2])

// Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.

console.log(numero.includes(5))
console.log(boleano.includes("laranja"))