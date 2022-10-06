//1. Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume (v = 4/3.P .R3).
function soma(raio){
    let soma = 4 / 3 * 3.14 * (raio * raio * raio)     
    alert(soma)
}
let raio = prompt('Digite o raio da sua esfera:')
soma(Number(raio))