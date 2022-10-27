/* ATRIBUIÇÃO via DESESTRUTURAÇÃO (OBJETOS)
-> 

*/
const pessoa  = {
  nome: 'Vinicius',
  sobrenome: 'Gonçalves',
  idade: 20,
  endereco: {
    rua:'Av Brasil',
    numero: 32,
  }
}
//ATRIBUIÇÃO via DESESTRUTURAÇÃO
let {nome, nomeMeio = 'Carneiro', sobrenome, endereco: {rua, numero}} = pessoa
console.log(nome, nomeMeio, sobrenome);
console.log(rua, numero);

console.log('Usando rest:');
let {...resto} = pessoa
console.log(resto);