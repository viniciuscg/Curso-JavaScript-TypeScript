const p = document.querySelectorAll('p')

const styleBody = getComputedStyle(document.body)
const backgroundBody = styleBody.backgroundColor
const container = getComputedStyle(document.getElementsByClassName('container')[0])
const fontColor = container.backgroundColor

p.forEach (function (paragrafo){
  paragrafo.style.backgroundColor = backgroundBody
})

p.forEach (function (letra){
  letra.style.color = fontColor 
  // duas maneiras de pegar color pelo js
  letra.style.color = '#ffffff'
})