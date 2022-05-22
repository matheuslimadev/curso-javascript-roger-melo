// inteiros e decimais
const radius = 10
const pi     = 3.14 // em JS usa-se '.' em números decimais, ao invés de ','
console.log(radius, pi) // 10 3.14 - inteiro(10), decimal(3.14)

// operadores aritméticos
console.log(10 / 2) // 5

const reminder = 5 % 2 // % é o resto da divisão entre o número 1º e o 2ª
console.log(reminder) // 1 - ímpar
console.log(4 % 2) // 0 - par

const area = pi * radius ** 2 // Fórmula p/ calcular a área de um círculo
console.log(area)

/**
 * ordem de operações
 * 1º parentêses ()
 * 2ª expoentes(potência) ou raízes
 * 3ª multiplicação e divisão
 * 4ª adição e subtração
 */
const crazyOperation = 5 * (10 - 3) ** 2
console.log(crazyOperation) // 245

// operadores de incremento e decremento
let postLikes = 10
// postLikes = postLikes + 1 //maneira mais longa
postLikes++ // incremento - maneira mais curta
postLikes-- // descremento - maneira mais curta
console.log(postLikes) // 10

// operadores addition, subtraction, multiplication e division assignment
// postLikes = postLikes + 10 // maneira mais longa
postLikes += 20  // maneira mais curta
console.log(postLikes) // 30
postLikes -= 15 // maneira mais curta
console.log(postLikes) // 15
postLikes *= 3
console.log(postLikes) // 45
postLikes /= 2
console.log(postLikes) // 22.5

// NaN - not a number
console.log(7 / 'oi') // NaN

// concatenção de string com número
const likesMessage = 'O post tem ' + postLikes + ' likes.'
console.log(likesMessage)
