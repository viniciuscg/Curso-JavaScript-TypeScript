/*
O usuário deverá informar seus ganhos no mês através das horas trabalhadas. Peça o valor hora, quantidade de horas trabalhadas normalmente, 
horas extras com acréscimo de 50% e horas extras com acréscimo de 100%, vamos ao exemplo:
Valor hora: R$10,00
Horas trabalhadas normalmente: 10 horas
Horas trabalhadas com acréscimo de 50%: 10 horas
Horas trabalhadas com acréscimo de 100%: 10 horas

Horas trabalhadas: R$100,00
Horas extras 50%: R$150,00
Horas extras 100%: R$200,00

Salário: R$450,00
*/

function somar() { 
    const valorHora = Number(document.getElementById('valor-hora').value)
    const horasNormalmente = Number(document.getElementById('horas-normalmente').value)
    const horasExtras50 = Number(document.getElementById('horas-extras50').value)
    const horasExtras100 = Number(document.getElementById('horas-extras100').value)

    const resultadoTrabalha = valorHora * horasNormalmente
    const resultadosExtras50 = (valorHora * horasExtras50) * 1.5
    const resultadosExtras100 = (valorHora * horasExtras100) * 2
    const salario = resultadoTrabalha + resultadosExtras100 + resultadosExtras50

    document.getElementById("msg").innerHTML = `
        <p>Horas trabalhadas: R$${resultadoTrabalha}</p>
        <p>Horas extras 50%: R$${resultadosExtras50}</p>
        <p>Horas extras 100%: R$${resultadosExtras100}</p>
        <p>Salário: R$${salario}</p>
    `           
}