/**
 * Null e Undefined
 * São semelhantes e ambos representam: A falta de valor
 * Null: Deve ser intencionamente atribuído. Diferentemente do Undefined, que o próprio JS se encarrega de atribuir.
 */

// Exemplo - Quando não atribuimos valor p/ uma variável e tenta usar ela, o JS automaticamente atribuí undefined à essa variável:
let emptiness
console.log(emptiness, emptiness + 3, `O valor é ${emptiness}`) // undefined NaN 'O valor é undefined'

// Mesmo exemplo acima, porém atribuindo um null à variável:
let nulo = null
console.log(nulo, nulo + 3, `O valor é ${nulo}`) // null 3 'o valor é null'