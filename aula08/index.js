/**
 -> Arritiméticos
 -> + Adição e concatenação ( - / *)
 -> - / * **
 -> % Resto da divisão
 -> Ordem de prioridade:
 -> () 
 ->  * / %
 ->  + -
 ->  Não posivel somar nome com numero 
 */
console.log("Ordem de prioridade:");
const num1 = 5;
const num2 = 2;
const num3 = 10;

console.log((num1 + num2) * num3)

/*
Operadores de incremento = ++
Operadores de decremento = --
*/

console.log("Operadores de DE/INcremento:");
let contador = 1; //Não consigo adicionar contadores em uma const

contador++; //2
contador++; //3
contador++; //4
contador++; //5

console.log(contador++); //5
console.log(contador); //6
console.log(--contador); //5
console.log(--contador); //4 
console.log(--contador); //3
console.log(--contador); //2
console.log(--contador); //1

console.log("Mutiplicador de Passos:");
const passo = 2;
let adicao = 0;

adicao = passo + adicao;
console.log(adicao); //2

adicao = passo + adicao;
console.log(adicao); //4

console.log("Operadores de atribuição:");

adicao = 2 //apenas resetando a adição
adicao += passo; //4
adicao += passo; //6
adicao += passo; //8
console.log(adicao);

console.log("Usando outros sinais:");

adicao = 2 
adicao *= passo; //4
console.log(adicao, "Usando *");

adicao = 2 
adicao /= passo; //1
console.log(adicao, "Usando /");

adicao = 2 
adicao *= 5; //10
console.log(adicao, "Sem usar a const passos");

adicao = 2 
adicao **= 10; //1024
console.log(adicao, "Sem usar a const passos e usando **");

console.log("Not a Number:");
let nan1 = 10;
let nan2 = 'Luiz'; //string
let nan3 = '5'; //string
let nan4 = parseInt('5'); 
let nan5 = parseFloat('5.5'); 
let nan6 = Number('5.5'); 

console.log(nan1 * nan2); //Não da para somar numero com letras
console.log(nan1, nan2); //Mas da para atribuir
console.log(nan1 + nan2); //Adicão
console.log(nan1 * nan3); //JavaScript ira ler apenas o numero dentro da string
console.log(nan1 + nan3); //Atribuindo a string "5" a let "10"
console.log(nan1 + nan4); //Posso atribuir o 5 ao 10 usando "parseint(fara conversão para inteiro)"
console.log(nan1 + nan5); //Posso atribuir o 5.5 ao 10 usando "parsefloat(fara conversão para float)"
console.log(nan1 + nan6); //Number -> irar ler tanto int quanto float