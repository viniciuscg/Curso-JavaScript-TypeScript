/*ARAYS
-> Cada casa de uma string é referente a um numero inciando do 0
-> Cada item presente em um array e referente a um numero inciando de 0 
-> Se adicionar um elemento no começo da lista ele vai passar a ser o elemento 0
-> Se adicionar um elemento no final da lista ele vai passar a ser o ultimo elemento 
-> Se remover um elemento no começo da lista o elemento a seguir irar se tonar o 0 
-> Deletar um elemento não altera a numeração dos itens
-> Se você acessar um numero que não esta na lista o valor sera undefined
-> E possivel mudar um array para uma string ou qualquer outro dado (DES DE QUE SEJA UMA "LET")
*/
console.log("Arrays:");
//            01234567
const nome = "Vinicius"

console.log(nome[0]); // -> Esta se referindo a Primeira letra da string acima

console.log("Arrays Listas:");
//                 0           1            2
const nomes = ['Vinicius', 'Carneiro', 'Gonçalves']

console.log(nomes[0]); // -> Referente ao primeiro item da lista
console.log(nomes[1]); // -> Referente ao segundo item da lista
console.log(nomes[2]); // -> Referente ao terceiro item da lista

console.log("Alterando/Adicionando a lista");
nomes[0] = 'Valeria' // -> Você pode alterar qualquer item da lista 
nomes[3] = 'Vinicius' // -> Você pode adicionar um novo item a lista
nomes[nomes.length] = 'Carneiro'; // -> Adicionando 1 elemento ao fim da lista (5 elemento)
nomes.push('Gonçalves'); // -> Adicionando 1 elemento ao fim da lista (6 elemento) de outra forma
//alunos.unshift('Ferreira'); -> Podemos usar este comando para redefinir o item 0.
//alunos.unshift('Nilva'); -> Se adicionarmos outro item ao começo o proprio se torna o item 0
console.log(nomes);

console.log("Removendo itens do Array:");

const removido = nomes.pop(); // -> removendo o ultimo item da lista

console.log("Elementos removidos -> ", removido); // mostrando os elementos removidos
console.log("Array sem o elemento removido -> ", nomes); // mostrando os elementos sem o item removido 
delete nomes[1] //deletando o item 1 da lista 
console.log("Elemento deletado -> ", nomes); // sera mostrado um elemento vazio no campo 1

console.log("Identificando o tamanho da lista:");
console.log(nomes.length); // -> Comando usado para adicionar sempre 1 item a mais na lista 
console.log(nomes[50]); // -> Ira dar undefined pois não a o item 50 na lista
console.log(nomes.slice(0, 3)); // -> Ira exibir apenas do item 0 ate o item 2