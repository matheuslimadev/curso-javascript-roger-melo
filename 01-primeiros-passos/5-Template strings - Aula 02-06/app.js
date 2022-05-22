const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Matheus Happy'
const postComments = 15

// usando concatenação
const postMessage = 'O post "' + postTitle + '", do ' + postAuthor + ', tem ' + postComments + ' comentários.'
console.log(postMessage)

// Escapando a string:
console.log('Você manja do filme \'As branquelas\'?')

// usando template strings
const postMessageT = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários.`
console.log(postMessageT)

// criando templates HTML
const html = `
  <h2>${postTitle}</h2>
  <p>Autor: ${postAuthor}</p>
  <span>Este post tem ${postComments} comentários</span>
`
console.log(html)