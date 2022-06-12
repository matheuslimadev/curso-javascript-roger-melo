// Booleans e comparações:
// console.log(true, false, 'true', 'false')

// Métodos podem retornar booleans:
const email = 'brucewayne@rogermelo.com.br'
const includes = email.includes('@') // String.includes(param) - Esse método retorna um boolean (true or false) dependendo se o que foi passado via parâmetro foi encontrado na string.
// console.log(includes) // true

const names = ['dio', 'roger', 'robert'] // Array.includes(param) - Tb funciona em Arrays.
const arrayIncludes = names.includes('roger')
// console.log(arrayIncludes) // true

// Operadores de comparação:
const age = 31

// console.log(age == 31) // true
// console.log(age == 35) // false
// console.log(age != 35) // true
// console.log(age != 31) // false
// console.log(age > 30) // true
// console.log(age > 31) // false
// console.log(age < 31) // false
// console.log(age < 32) // true
// console.log(age <= 31) // true
// console.log(age >= 31) // true

const name = 'matheus'
console.log(name == 'matheus') // true
console.log(name == 'Matheus') // false
console.log(name > 'belinha') // true - As últimas letras do Alfabeto são maiores que as as primeiras letras do Alfabeto. Então, 'm' de matheus é maior que 'b' de belinha.
console.log(name > 'Matheus') // true - O JS entende que 'M' (maiúsculo) é menor que 'm' (minúsculo). Sendo assim, 'matheus' é maior que 'Matheus' em JS.
console.log(name > 'Belinha') // true - O JS entende que 'm' é não apenas maior que 'M', mas é também, maior que qualquer letra maiúscula.


