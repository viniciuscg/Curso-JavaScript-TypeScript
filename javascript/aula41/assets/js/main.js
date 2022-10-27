const inputTarefa = document.querySelector('.input-tarefa') // pegando o input dentro do paragrafo
const bntTarefa = document.querySelector('.btn-tarefa') // pegando o button dentro do paragrafo 
const tarefas = document.querySelector('.tarefas') //pegando o ul 

function criaLi() { //criando uma função que cria uma li
  const li = document.createElement('li')
  return li;
}

inputTarefa.addEventListener('keypress', function(e){ //fazendo com que o item seja adicionado na lista ao pressionar ENTER
  if (e.keyCode === 13){ //se Event.keycode for igual a 13 
  if(!inputTarefa.value) return; //então irar retornar a tarrefa posta no input 
  criarTarefa(inputTarefa.value); // e ira criar a tareffa 
}
})

function limpaInputt() {
  inputTarefa.value = '' // adicionando nada ao input para podemors limpa-lo
  inputTarefa.focus() //fazendo com oque o foco sempre seja no input.
}

function criaBotaoApagar(li) { //criando o botão de apagar
  li.innerText += ' '; 
  const botaoApagar = document.createElement('button') //criando o botão 
  botaoApagar.innerText = 'Apagar' //adicionando um texto dentro do butão
  li.appendChild(botaoApagar) //defindo o botaoPAagar com filho da li 
  botaoApagar.setAttribute('class', 'apagar') //adicionando uma class para a botão
  botaoApagar.setAttribute('Title', 'Apagar esta tarefa') // se passar o mouse por cima do botão ira ver "apagar esta tarefa"
}

function criarTarefa(textoInput) { 
  const li = criaLi() //criando uma lista 
  li.innerHTML = textoInput 
  tarefas.appendChild(li) // colocando childs dentro da ul 
  limpaInputt() //adcioando a limpeza de input ao terminar de adcionar um item
  criaBotaoApagar(li)
  salvarTarefas()
}

bntTarefa.addEventListener('click', function(){ //adicionando um evento no click do button 
  if(!inputTarefa.value) return;  // criando a função que irar adcionar a tarefa
  criarTarefa(inputTarefa.value);
})

document.addEventListener('click', function(e){ // criando a função para apagar o item da lista 
  const el = e.target //atribuindo el a e

  if(el.classList.contains('apagar')){ // fazendo com que o texto seja apagado
    el.parentElement.remove() //removendo oitem da lista
    salvarTarefas()
  }
})

function salvarTarefas() { //criando uma função para salvar as tarefas 
  const liTarefas = tarefas.querySelectorAll('li') //defindo uma const as tarefas que estão na "li"
  const listaDeTarefas = [] //defindo um array que ira ficar armazenado as tarrefas

  for (let tarefa of liTarefas) { 
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
    listaDeTarefas.push(tarefaTexto)
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas)
  localStorage.setItem('tarefas', tarefasJSON)
}

function adcionarTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas')
  const listaDeTarefas = JSON.parse(tarefas)

  for (let tarefa of listaDeTarefas){
    criarTarefa(tarefa)
  }
}
adcionarTarefasSalvas() 