// Métodos comuns de strings
const email = 'laracroft@rogermelo.com.br'

/**
 * string.lastIndexOf(param) - retorna a última posição que o caractere - passado via argumento - foi encontrado na string
 * Obs: Não altera o valor original da string.
 */
// 
const lastIndexOfA = email.lastIndexOf('a')
console.log(lastIndexOfA) // 3

/**
 * string.slice(argumento1, argumento2)
 * Vai retornar a string fatiada
 * argumento1 - Index do caractere "a partir" do qual inicia-se o fatiamento
 * argumento2 - Index do caractere "a partir" do qual eu não quero pegar
 * Obs: Não altera o valor original da string.
 */
const emailSlice = 'matheus.alves@msn.io'
console.log(emailSlice.slice(0, 13)) // matheus.alves

/* Exemplo avançado: */
console.log(emailSlice.slice(emailSlice.indexOf('@') + 1, emailSlice.length)) // Exibindo apenas o domínio do email (depois do @)

/**
 * string.replace(argumento1, argumento2)
 * argumento1 - string
 * argumento2 - string que irá substituir a string alvo
 * Obs: O método irá substituir a primeira ocorrência ocorrência na string - passado via argumento1
 * Obs: Não altera a string original
 */
const emailReplace = emailSlice.replace('a', 'A') 
console.log(emailReplace) // mAtheus.alves@msn.io - note que ele não alterou a segunda ocorrência de 'a' que seria para: 'mAtheus.Alves@msn.com'
// Para alterar todas as ocorrência seria necessário usar Regex.

const emailDominioReplace = emailSlice.replace('msn.io', 'msn.com')
console.log(emailDominioReplace)


