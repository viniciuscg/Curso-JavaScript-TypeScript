// Escreva uma função que recebe dois numeros e retorne o maior deles.

// Fazendo pelo console 
function max(x, y) {
  return x > y ? x : y;
}
console.log(max(10, 2));

// Usando arrowFunction 
const max2 = (x, y) => x > y ? x : y;
console.log(max(10, 2));


// Fazendo pelo prompt
function numero(x, y) {
  const n1 = prompt('Digite o n1:')
  const n2 = prompt('Digite o n2:')
  x = n1
  y = n2
  if (x > y) {
    alert(x)
  }else {
    alert(y)
  }
}
numero()