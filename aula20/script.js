/*Switch/Case
-> Switch/Case pode ser usado para substituir if/else em alguma situações
*/
function getDiaSemanaTexto (diaSemana) {
    let diaSemanhaTexto;

    switch (diaSemana){
        case 0: 
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto; // substituindo break por return || Caso afirmação acima seja verdadeira codigo sera parado por este return
        case 1:
            diaSemanaTexto = 'Segunda'
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça'
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta'
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta'
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta'
            return diaSemanaTexto; 
        case 6:
            diaSemanaTexto = 'Sabado'
            return diaSemanaTexto; 
        default: //Usando default no lugar de else 
            diaSemanaTexto = '' //String vazia caso o dia da semana não seja nenhum acima
            return diaSemanaTexto; 
        }
    }

const data = new Date('1987-04-22 00:00:00');
const diaSemana = data.getDay(); //variavel completamente diferente da variavel acima 
let diaSemanaTexto = getDiaSemanaTexto (diaSemana)

switch (diaSemana){
case 0: //Utilizando case no lugar de if 
    diaSemanaTexto = 'Domingo'
    break; //Fazendo o codigo parar de ler caso o valor a cima seja verdadeiro
case 1:
    diaSemanaTexto = 'Segunda'
    break;
case 2:
    diaSemanaTexto = 'Terça'
    break;
case 3:
    diaSemanaTexto = 'Quarta'
    break;
case 4:
    diaSemanaTexto = 'Quinta'
    break;
case 5:
    diaSemanaTexto = 'Sexta'
    break; 
case 6:
    diaSemanaTexto = 'Sabado'
    break; 
default: //Usando default no lugar de else 
    diaSemanaTexto = '' //String vazia caso o dia da semana não seja nenhum acima
    break; // não necessario adicionar break apos o default, pois o default conrresponde a ultima condição 
}

/*if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo'
}else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda'
}else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça'
}else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta'
}else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta'
}else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta'
}else if (diaSemana === 6) {
    diaSemanaTexto = 'Sabado'
}else {
    diaSemanaTexto = '';
}
*/

console.log(diaSemana, diaSemanaTexto);