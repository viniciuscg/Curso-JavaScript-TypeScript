/* FUNÇÕES 
-> Para chamar a função deve-se declarar o nome da função e logo em seguida coloca-la entre ()
-> uma função pode ser atrelada a um parametro 
-> Não e possivel acessar oque esta dentro da função 
*/

//             parametro
function saudacao(nome) {
    console.log(`Bom dia ${nome}`); //atrelando nome | sempre usar crase
    return  `Bom dia ${nome}`;
}

console.log("Definindo o parametro:");

saudacao('Vinicius'); // Chamanado a função e definindo o nome "Vinicius"
saudacao('Gonçalves'); // Chamanado a função e definindo o nome "Gonçalves"

console.log("Declarando uma variavel:")

const variavel = saudacao('Vinicius'); // Mostro o parametro 

console.log(variavel) // So ira se definido se usar "return"

console.log("Fazendo uma soma:");

function soma(x, y) { //Declarando os campos da soma 
    const resultado = x + y //Mostrando o que fazer com os dois campos
    return resultado // Pedindo para retorna o resultado da soma
}
// Para você somar dentro do "LOG" você deve chamar a soma antes
console.log(soma(5, 5)); // declarando o valor de "x, y"
console.log(soma(1, 2)); // declarando o valor de "x, y"
console.log(soma(3, 5)); // declarando o valor de "x, y"

const resultado = soma(2, 2) // ddeve se definir os valores para o progama não somar x + y
console.log(resultado);