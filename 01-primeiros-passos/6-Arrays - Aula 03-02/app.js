// Para que serve Arrays:
// R: Para armazenar uma lista de dados que estão relacionados entre si.

// Arrays
let heroes = ['Batman', 'Catwoman', 'Iron Man']
// console.log(heroes) // array
// console.log(heroes[0]) // Batman
// console.log(heroes[1 + 1]) // Iron Man

heroes[2] = 'Spider Man' // sobrescrevendo
// console.log(heroes[2]) // Spider Man

const ages = [31, 25, 39, 40]
// console.log(ages[3]) // 40

const randomArray = ['Elefante', 123, {}, []] // Não faz sentido, mas é possível
// console.log(randomArray)

// Métodos de Array:
// console.log(heroes.length) // .length tb é uma propriedade de array
const joinHeroes = heroes.join() // Retorna uma nova string com os itens do array concatenados e separados por vírgula.
// console.log(joinHeroes)

const joinAges = ages.join('|') // param do join que permite substituir vírgula (padrão) como separador, para o que vc específicou no parâmetro.
// console.log(joinAges)

const quarentao = ages.indexOf(40) // array.IndexOf(param) Retorna a posição no array onde foi encontrado a primeira ocorrência do que se passou via parâmetro.
/** Atenção: O retorno do método IndexOf pode ser -1 caso o que foi passado via parâmetro não exista no array */
// console.log(quarentao)

/**
 * Array.concat(param) - param pode ser uma string que será inserida em uma nova posição dentro do array. Ou pode ser passado um array via param que ele retornará um novo array juntando os dois.
 * Obs: Não altera o valor do array original.
 */
const oneMoreHeroe = heroes.concat('Aquaman')
const moreHeroes = oneMoreHeroe.concat(['Hulck', 'Thor', 'DeadPool'])
// console.log(oneMoreHeroe)
// console.log(moreHeroes)

/**
 * Array.push(param1, param2, param3...)
 * O que foi passado via parâmetro será "empurrado" para o final do array setado
 * Obs: Será retornado o tamanho do array - semelhante ao Array.length
 * Obs: altera o valor original do Array setado.
 */
const pushToAllHeroes = moreHeroes.push('Cyclops', 'Wolverine')
// console.log(pushToAllHeroes) // Retorna o tamanho do array
// console.log(moreHeroes)

/**
 * Método Array.pop()
 * Remove o último item do aray e retorna este item.
 * Módifica o array setado
 */
const popLastHeroe = moreHeroes.pop()
console.log(popLastHeroe) // Wolverine
