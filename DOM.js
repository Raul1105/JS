let selecionado = document.querySelector('input');
let nome = document.querySelector('p');
let enviar = document.querySelector('button');
let contador = 1;

selecionado.onclick = () => {
    selecionado.value = '';
}

enviar.onclick = () => {
    nome.innerHTML += `${contador}° Usuario: ${selecionado.value} adicionado <br>`;
    selecionado.value = '';
    contador += 1;
}