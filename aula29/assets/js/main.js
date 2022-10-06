/* DOM
-> DOM conrresponde a arvore de codigo EXEMPLO: window -> document - html -> head | body -> div ...
-> window e pai de document -> document e filha de window e pai de html -> html e filha de document e pai de head......
-> dom se refere ao navegador e tmb se refere ao uma interface de objetos que nos permitem manipular a pagina
*/
const elementos = [
  {tag: 'p', texto: 'frase1'},
  {tag: 'div', texto: 'frase2'},
  {tag: 'section', texto: 'frase3'},
];
//selecionando a class container 
const container = document.querySelector('.container');
// usando o DOM para criar uma div
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
 let { tag, texto  } = elementos[i];
 // usando o dom para criar um element "tag"
 let tagCriada = document.createElement(tag);
 tagCriada.innerHTML = texto; //direcionando a TagCriada para exibir "texto"
 div.appendChild(tagCriada); // adicionando tag criada a div || tonando tagCriada filha da div
}

container.appendChild(div); // tornando div filha da container