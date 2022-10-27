const nome = "Vinicius" //String
const nome1 = 'Vinicius' //String
const nome2 = `Vincius` //String
const num1 = 10 //Number
const num2 = 10.50 //Number
let nome3; //undefined -> não aponta pra local nenhum
const sobrenome = null // não aponta pra local nenhum, porem eu declaro o valor nulo
const aprovado = true; // Boolean -> true or false (lógico) 

console.log(typeof nome, nome)

const a = [1, 2]
const b = a

console.log(a, b)
 
b.push(3)
console.log(a, b)

let c = 2
let d = c 
console.log(d, c)

c = 3
console.log(d)
