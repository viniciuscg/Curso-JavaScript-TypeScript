// Escreva uma função que recebe um número e 
// retorne o seguinde:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número
// Use a função com número de 0 a 100

function fizzbuzz () {
  const n = prompt('Digite seu numero divisível por 5 ou 3:')

  if (numero % 3 === 0 && numero % 5 === 0) return alert('FizzBuzz')

  if (numero % 3 === 0 ) return alert('Fizz')

  if (numero % 5 === 0 ) return alert('Buzz')
  
  return 
}
fizzbuzz()
