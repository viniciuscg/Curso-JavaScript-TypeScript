/* BREAK / CONTINUE
-> não e errado fazer mais de um continue por laço
-> usando continue ele pula para a proxima interação porem continua executando
-> break ele quebra o laço e para de executar
-> difrente do continue, o break tem prioridade idependente de onde ele esta
*/
// CRIEI VARIOS FOR / WHILE, para testar use-os separadamente 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) { //Usando for of
  if ( numero === 2) {
    continue  //dando continue para pular o numero 2, pulando para proxima interação do laço 
  }

  console.log(numero);

  if (numero === 7) {
    break; //usando break para a lista so ir ate o 7
  }
}
let i = 0
for (let i in numeros) { // usando forin  
  let numero = numeros[i]
  if ( numero === 2) {
    continue  //dando continue para pular o numero 2, pulando para proxima interação do laço 
  }

  console.log(numero);

  if (numero === 7) { 
    break; //usando break para a lista so ir ate o 7
  }
}

for (let i = 0; i < numeros.length; i++) { // usando for classico
  if ( numero === 2) {
    continue  //dando continue para pular o numero 2, pulando para proxima interação do laço 
  }

  console.log(numero);

  if (numero === 7) { 
    break; //usando break para a lista so ir ate o 7
  }
}
while (i < numeros.length) {
  let numero = numeros[i]

  if (numero === 2) {
    continue;
  }

  if (numero === 7) {
    break;
  }

  i++ // se não usarmos o i++ no while, ele ira cair em lopping infinito no (While)
}
do {
  let numero = numeros[i]

  if (numero === 2) {
    continue;
  }

  if (numero === 7) {
    break;
  }

  i++ // se não usarmos o i++ no while, ele ira cair em lopping infinito no (While)
}while (i < numeros.length)