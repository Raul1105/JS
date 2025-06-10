let nome = document.querySelector('#nome');
let idade = document.querySelector('#idade');
let enviar = document.querySelector('button');
let nomes = document.querySelector('#tabela');
let contador = 0;
let contagem = document.querySelector('#contagem');
let media = document.querySelector('#media');
let mediaUsuario = 0;
let idadeNumero;
let mediaAtual;

function adicionar(){
    idadeNumero = parseFloat(idade.value)
    contador += 1;
    mediaUsuario += idadeNumero;
    mediaAtual = mediaUsuario / contador;


    
    nomes.innerHTML += `<tr><td>${nome.value}</td> <td>${idade.value}</td></tr>`;
    nome.value = '';
    idade.value = '';
    contagem.innerHTML = `${contador}`
    media.innerHTML = `${mediaAtual.toFixed(2)}`;
    
}



enviar.addEventListener ('click', adicionar)