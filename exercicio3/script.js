/*
# Exercício 3

Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;
*/

const numero = [5, 25, 52, 152]
const strings = ["uva", "maca", "banana", "pessego"] 
const boleano = [5, "uva", true]

console.log(numero)
console.log(strings)
console.log(boleano)

const numeroCopia = numero.slice()
const stringsCopia = strings.slice()
const boleanoCopia = boleano.slice()
//Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
numeroCopia.push(12)

//Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
stringsCopia.pop()

//Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
boleanoCopia.splice(1,1)

console.log(numeroCopia)
console.log(stringsCopia)
console.log(boleanoCopia)