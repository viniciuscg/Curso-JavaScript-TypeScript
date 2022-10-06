/* FOR 
-> For sempre fara looping 
-> For e utilizado em estruturas de repetição para não extender muito o codigo
-> no for você deve criar um ponto de start, um ponto de chegada e qual rota sera percorrida 
-> No for você pode De/Incrementar quantas vezes for necessário 
*/
//       start 0| ate 5| oque ira aconceter quando inciar o 0  
for (let i = 0; i <= 5; i++) {  //incrementando de 1 em 1
  console.log(`1 em 1 ate: ${i}`);
}
for (let i = 0; i <= 100; i+= 10) { //incrementando de 10 em 10
  console.log(`10 em 10 ate: ${i}`);
}
for (let i = 100; i >= 0; i -= 10) {  //decrementando de 10 em 10
  console.log(`-10 em -10 ate: ${i}`);
}
for (let i = 10; i >= 0; i--) { //decrementando de 1 em 1
  console.log(`-1 em -1 ate: ${i}`); 
}

console.log("Par/Impar");

for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? 'par' : 'impar';
  console.log(i, par);
}

console.log('Frutas');
const frutas = ['Maçã', 'Banana', 'Uva']

for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}`, frutas[i]);
}