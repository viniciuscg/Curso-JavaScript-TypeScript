/* FOR OF
->For of pega o valor tanto de string quanto de array
-> ForEach não funciona com strings 
-> Não conseguimos utilizar FOROF em um objeto 
-> For classico geralmente com interaveis (array ou string)
-> For in Retorna o indice ou chave (string, arrays ou objetos)
-> ForOf retorna o valor em si (interaveis, arrays ou strings)
*/
//            0123....
const nome = 'Luiz Otavio'
const nomes = ['Luiz Otavio', 'Vinicius', 'Carneiro']

for (let valor of nome){
  console.log(valor);
}

nomes.forEach(function (valor, indice) {
  console.log(valor, indice);
});
