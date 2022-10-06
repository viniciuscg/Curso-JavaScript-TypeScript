/*
&& -> false && true -> false
|| -> true && false -> vai retonar o valor verdadeiro 

FALSY 
false
0 
'' "" ``
null/undefined
NaN
*/
console.log('luiz' && '' && 'Maria');

function falaOi () {
    return 'oi';
}

const vaiexcutar = 'test'

console.log(vaiexcutar && falaOi());

console.log ( 0 || false || null || 'test' || true)

const corusu = null
const corpadrao = corusu || 'preto'

console.log(corpadrao)