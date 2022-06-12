/**
 * CONVERSÃO DE TIPOS
 */

/** String -> Número */
let score = '100'
//score = Number(score)
//console.log(score + 1) // 101
//console.log(typeof score) // number

/** Palavra (String) -> Número - vai dar merd# */
const crazyConversion = Number('Maçã')
//console.log(crazyConversion) // NaN

/** Número -> String */
const convertedNumber = String(25)
// console.log(convertedNumber)
// console.log(typeof convertedNumber)

/** Número, String -> Boolean */
const dog = Boolean('labrador')
const bola = Boolean(8)
const numbers = Boolean([0, 1, 2])
// console.log(dog, typeof dog)
// console.log(bola, typeof bola)
// console.log(numbers, typeof numbers)

/**
 * Valores falsy:
 * false
 * 0
 * "", '', ``
 * null
 * undefined
 * NaN
 * 
 * Valores truthy:
 * Qualquer valor que não é falsy
 */