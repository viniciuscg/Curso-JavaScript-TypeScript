/* While | Do While
-> sempre importante usar i++ para não da condição infinita 
-> do While execulta primeiro e depois le a condição
*/
let i = 0;
const nome = 'Vinicius'

while ( i < nome.length) { // podemos usar o for, porem estou usando while apra exemplificar
  console.log(nome[i]);
  i++
}
function random(min, max) {
  const r = Math.random() * (max - min) + min
  return Math.floor(r)
}

const min = 1 // criando o valor minimo para randomificar
const max = 50 // criando o valor maximo para randomificar
let rand = random (1, 50) // definindo a variavel rand a função random 

while (rand !== 10) { // Enquanto rand for difenrte de 10 
  rand = random(min, max) // você iria continuar mandando numeros de 1 a 50 ate acahr o numero 10 
  console.log(rand);
}

console.log('##########');

do {
  rand = random(min, max) // redefinindo o valor de rand e impedindo o While de ser execultado
  console.log(rand);
} while (rand !== 10)