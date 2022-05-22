// strings
console.log('hello, world')

const email = 'teste@mail.net'

console.log(email)

// concatenação de strings
const firstName = 'Nathan'
const lastName  = 'Owrel'
const fullName  = firstName + ' ' + lastName
console.log(fullName)

// acessando caracteres
console.log(fullName[0])

// comprimento de uma string
// importante: o length ignora a base 0, ou seja, ele conta o tamanho de uma string a partir de 1. Exemplo: 'abc'.length vai retornar o tamanho 3.
console.log(fullName.length) //.length é uma propriedade da string, e não uma função. Por isso não é necessário usar assim: string.length() e sim, assim: string.length - sem parênteses ()

// métodos de string
console.log(fullName.toUpperCase())

const result = fullName.toLowerCase()
console.log(result)
/* Obs: Tanto os métodos .toUpperCase() quanto .toLowerCase() não alteram o valor original da string */
console.log(fullName)

const index = email.indexOf('@')
console.log(index)