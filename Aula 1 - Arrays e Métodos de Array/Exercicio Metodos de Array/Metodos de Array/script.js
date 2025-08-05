function executarPush() {
  const array = ['🍎', '🍌'];
  // const resultado = array.push('🍇') - por padrao retorna o numero de elementos - resultado = 3
  array.push('🍇')
  // adiciona no final do array
  const resultado = array;
  document.getElementById('resultado-push').textContent = resultado;
}

function executarPop() {
  const array = ['🍎', '🍌', '🍇'];
  // pop sempre remove o ultimo
  array.pop()
  const resultado = array;
  document.getElementById('resultado-pop').textContent = resultado;
}

function executarShift() {
  const array = ['🍎', '🍌', '🍇'];
  // shift sempre remove o primeiro elemento
  array.shift()
  const resultado = array;
  document.getElementById('resultado-shift').textContent = resultado;
}

function executarUnshift() {
  const array = ['🍌', '🍇'];
  //unshift adiciona no começo do array
  array.unshift('🍓')
  const resultado = array;
  document.getElementById('resultado-unshift').textContent = resultado;
}

function executarIncludes() {
  const array =  ['🍎', '🍌', '🍇'];
  //checa se o elemento esta no array
  //retorna true or false  
  const resultado = array.includes('🥝');
  document.getElementById('resultado-includes').textContent = resultado;
}

function executarReverse() {
  const array = ['🍎', '🍌', '🍇'];
  //inverte a ordem dos elementos
  const resultado = array.reverse();
  document.getElementById('resultado-reverse').textContent = resultado;
}

function executarSort() {
  const array = [3, 1, 4, 2, 11];
  const array2 = ["Brasil", "Argentina", "Noruega", "Italia"];
//por padrao ordena por ordem alfabetica
// para numeros, por ser ordem alfabetica, entende que tudo que vem 1 vai na frente
// precisa de um função anomima a - b para ordem crescente, b - a 

  const resultado = array.sort(function(a, b){return b - a});
  //arrow function - const resultado = array.sort((a,b) => b - a)
  document.getElementById('resultado-sort').textContent = resultado;
  const resultado2 = array2.sort();
  //orderm descrecente - array2.sort().reverse()
  document.getElementById('resultado-sort2').textContent = resultado2;
}

function executarSlice() {
  const array = ['🍎', '🍌', '🍇', '🍓'];
  // corta uma parte do array, recebe dois parametros 

  const resultado = array.slice(1,3);
  document.getElementById('resultado-slice').textContent = resultado;
}

function executarSplice() {
  const array = ['🍎', '🍌', '🍇'];
  // remove um item a partir de uma posição, por padrao retorna na variavel o item que foi excluido
  // array.splice(2,1, '🍓') -  terceiro parametro, pode adicionar elemento no lugar do item excluido
  array.splice(2,1)
  const resultado = array;
  document.getElementById('resultado-splice').textContent = resultado;
}


function executarIndexOf() {
  const array = ['🍎', '🍌', '🍇'];
  // retorna a posição do elemento no array
  const resultado = array.indexOf('🍇');
  document.getElementById('resultado-indexof').textContent = resultado;
}

function executarJoin() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.join('-');
  document.getElementById('resultado-join').textContent = resultado;
}

/* Loops de array */    

function executarForEach() {
  //só exibe na tela, não guarda nada, recebe uma função de callback
  //passa em cada um dos item e realiza uma ação
  const array = ['🍎', '🍌', '🍇'];
  const resultado2 = array.forEach(pegaItem => console.log(pegaItem));
  //função arrow function com só um parametro, não precisa dos ()
  const resultado = array.forEach((pegaItem, index) => console.log(`O item ${index + 1} é o ${pegaItem}`));
  document.getElementById('resultado-foreach').textContent = resultado;
}
//restante devolve uma cópia do array modificada

function executarMap() {
  const array = ['🍎', '🍌', '🍇'];
  const resultado = array.map(pegaItem => `✅ ${pegaItem}`);
  //não muda o array original
  console.log(array);
  console.log(resultado);
  
  document.getElementById('resultado-map').textContent = resultado;
}

 function executarMapHTML() {
    const dispositivos = ['🎮', '🕹️', '💻'];
    const resultado = dispositivos.map(pegaItem => 
      `<h1>Item em promoção</h1>
      <span>${pegaItem}</span>`);
    document.getElementById('resultado-map-html').innerHTML = resultado.join('<br>');
  }

function executarFilter() {
  const array = ['🍎', '🍌', '🍇'];
  //devolve um novo array com os elementos que atenderam a condição
  const resultado = array.filter(pegaItem => pegaItem === '🍎');
  document.getElementById('resultado-filter').textContent = resultado;
}

function executarFind() {
  const array =  ['🍎', '🍌', '🍇'];
  //procura o elemento e retorna true ou false
  const resultado = array.find(pegaItem => pegaItem === '🍇');
  document.getElementById('resultado-find').textContent = resultado;
}

function executarFindIndex() {
  const array =  ['🍎', '🍌', '🍇'];
  //procura o elemento e retorna o index
  const resultado = array.findIndex(pegaItem => pegaItem === '🍇');
  document.getElementById('resultado-findIndex').textContent = resultado;
}

function executarReduce() {
  const array = [1, 2, 3, 4];
  //soma todos os valores dentro de um array, rexuz a soma 
  const resultado = array.reduce((total, valorAtual) => total + valorAtual, 0);
  //dois paramentros, total valor acumulado e o valorAtual é o valor atual do array
  document.getElementById('resultado-reduce').textContent = resultado;
}

function executarEvery() {
  const array = [10, 20, 30, 40];
  const resultado = 'Resultado da operação every';
  document.getElementById('resultado-every').textContent = resultado;
}

function executarSome() {
  const array = ['🍎', '🍌', '🥝'];
  const resultado = 'Resultado da operação some';
  document.getElementById('resultado-some').textContent = resultado;
}

/* Encadeamento */

function executarEncadeamento() {
  const jogos = ['Zelda', 'Mario', 'Elden Ring', 'Fortnite', 'Minecraft'];
  const resultado = 'Resultado da operação encadeada';
  document.getElementById("resultado-encadeamento").textContent = resultado.join(', ') || 'Nenhum jogo encontrado';
}


