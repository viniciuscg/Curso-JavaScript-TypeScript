/* DATE
-> unix = 01/01/1970 
-> new Date() = dia atual 
-> data.toString() = localizando a const date
*/
const tresHoras = 60 * 60 * 3 * 1000; //adicionado tempo ao data
const umDia = 60 * 60 * 24 * 1000 //adicionando tempo ao date
const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix 
console.log(data.toString());

console.log("Outro modo:");
// 
const date = new Date('2019, 3, 20, 15, 14');

console.log('Data', date.getDate());
console.log('Mês', date.getMonth + 1()); //começa do 0
console.log('Ano', date.getFullYear());
console.log('Hora', date.getHours());
console.log('Min', date.getMinutes());
console.log('Seg', date.getSeconds());
console.log('ms', date.getMilliseconds());
console.log('Dia semana', date.getDay()); //0 e Domingo - 6 e Sábado
console.log(date.toString());
console.log(Date.now);
