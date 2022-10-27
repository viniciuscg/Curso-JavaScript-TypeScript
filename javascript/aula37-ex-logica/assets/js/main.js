// Escreva uma função chamanda ePaisagem Que recebe dois argumentos, a largura e a altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem. 

//Arrow function
const paisagem = (l, a) => l >= a
console.log(paisagem(1920, 1080));


//usando Console
function ePaisagem (largura, altura) {
  return largura >= altura ? true : false
}
console.log(ePaisagem(1920, 1080));

// Prompt
function ePaisagem (largura, altura ) {
  const n1 = prompt('digite a largura:')
  const n2 = prompt('digite a altura:')
  largura = n1
  altura = n2
  if (altura < largura) {
    alert(true)
  }else {
    alert(false)
  }
}
ePaisagem()