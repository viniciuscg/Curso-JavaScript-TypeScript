//  5. Faça uma função que recebe por parâmetro o tempo de duração de uma fábrica expressa em segundos e retorna esse tempo em horas, minutos e segundos.

function duracao (segundos){
    let minutos = segundos / 60  
    let horas = minutos / 60
    alert(`horas: ${horas} minutos: ${minutos}` )
}
let seg = prompt('Digite o tempo de duração de uma fábrica expressa em segundos:')
duracao(Number(seg))

