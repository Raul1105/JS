const lista = document.getElementById('lista');
const item = document.getElementById('item');
let itens = [];

function mostrarLista(){
    return itens.map(i => `<div>${i}</div>`).join('');
}


function removerItem(){
    itens.pop();
    lista.innerHTML = `Itens: ${mostrarLista()}`;
}


function adicionarItem(){
    itens.push(item.value)
    item.value = '';
    lista.innerHTML += `<div>${itens[itens.length - 1]}</div>`
}
