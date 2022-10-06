/* FOR IN
-> FOR IN le os indices ou chaves do objeto
*/
const frutas = ['Pera', 'maçã', 'uva']
const pessoa = {
  nome:'Luiz',
  sobrenome:'Otavio',
  idade: 30,
}
console.log(pessoa.nome);
console.log(pessoa['nome']);

for (let indice in frutas){
  console.log(frutas[indice]);
}
for (let indice in pessoa){ 
  console.log(indice, pessoa[indice]); 
}
