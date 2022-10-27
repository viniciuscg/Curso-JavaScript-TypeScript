/* Operção ternária
-> (Condição) ? 'Valor verdaderio' : 'Valor para falso';
-> 
*/
const pontuacaoUsuario = 999 //Definindo nivel do usuario 
const nivelUsuario = puntuacaoUsuario >= 1000 ? 'Usuario vip' : 'Usuario normal'
console.log(nivelUsuario);

const corUsuario = null // Defini uma const mas não setei nada dentro
const corPadrao = corUsuario || 'Preta' //criei outra const e atribui a cor preta a ela
console.log(corPadrao);

if (pontuacaoUsuario >= 1000){
    console.log('Usuário vip');
}else {
    console.log('Usuário normal');
}