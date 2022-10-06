/* ATRIBUIÇÃO via DESESTRUTURAÇÃO (ARRAYS)
-> ... rest, ...spread = São a mesma coisa

*/
let a = 'a';
let b = 'b';
let c = 'c';

const letras = [b, c, a];

[a, b, c] = letras;

console.log(a, b, c);

//               0  1  2  3  4  5  6  7  8  9
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const [zero, , dois, ...resto] = numeros
console.log(zero, dois);
console.log(resto);

//                   0          1           2
//                0  1  2    0  1  2    0  1  2
const arrays = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(arrays[1][2]); // numero 6

const [,[,,seis]] = arrays //buscando numero 6 de maneira dificil
console.log(seis); // numero 6

const [lista1, lista2, lista3] = arrays //buscando o numero 6 de maneira facil e organizadad
console.log(lista3[2]); // numero 9

