/** IF-ElSE
 -> If pode ser usado sozinho
 -> Sempre que utilizar ELSE tera um if antes
 -> So posso ter um ELSE na checagem 
 -> Eu posso ter varios ELSEIF na checagem  
 -> Podemos usar condições apenas com o IF e o ELSE, Não e necessario usar ELSEIF
 -> A partir do momento que o programa acha uma VERDADE ele a executa e para de ler
 */
// Entre 0 - 11 - Bom dia
// Entre 12 - 17 - Boa tarde
// Entre 18 - 23 - Boa noite
const hora = 23;

//se o if não esta viculado com outros if, ele sera executado e ainda sim ira ler os outros
if (1 === 1){ // Verdadeiro
    console.log('LITERAL');
}

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17){
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23){ // Verdadeiro
    console.log('Boa noite');
}else {
    console.log('Isto não e uma hora');
}

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
} 

const numero = 10

//Se (número >= 0 && numero <= 5) ocorrer, então ('O número esta entre 0 e 5.')   
//Se não ('Seu número não esta entre 0 e 5').
if (numero >= 0 && numero <= 5){
    console.log('O número esta entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('Seu número não esta entre 6 e 8');
} else if (numero >= 9 && numero <= 11) { //Verdadeiro
    console.log('Seu número não esta entre 9 e 11');
} else {
    console.log('o número não esta entre 0 e 11');
}