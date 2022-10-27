/* LET/CONST
-> Let tem escopo de bloco {.....bloco}
-> Var so tem escopo de função
-> Sempre que você chamar uma LET iria ser lida a que foi declarada por ultimo 
-> Bloco da função e especial
*/
const verdadeira = true;

let nome = 'Vinicius' //criando | Terceira a ser lida
var nome2 = 'Vinicius' //criando

var nome2 = 'Gonçalves' //Redeclarada 
console.log(nome, nome2);


if (verdadera) {
  let nome  = 'Gonçalves' //criando | Segunda a ser lida 
  var nome2 = 'Gonçalves' //Redeclarada 
  console.log(nome, nome2);

  if (verdadeira) {                   
    let nome  = 'Outra coisa' //criando | Primeira a ser lida
    var nome2 = 'Gonçalves' //Redeclarada 
    console.log(nome, nome2);
  }
}

console.log(nome, nome2); //Sera usada a LET que esta fora do escopo, Sera usado o VAR que esta dentro do escopo 
