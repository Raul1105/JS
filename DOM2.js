let nome = document.querySelector('#nome');
let sexo = document.querySelector('#sexo');
let enviar = document.querySelector('button');
let nomes = document.querySelector('p');
let contador = 1


function adicionarNome(){
    nomes.innerHTML += `${contador}° usuario adicionado: ${nome.value}<br>`
    nome.value = '';
    contador += 1;
}

nome.addEventListener('focus', () => {
    console.log(`O usuario selecionou o campo nome`)
})

sexo.addEventListener('change', () => {
    console.log(`O usuario selecionou o sexo ${sexo.value}`)
})

enviar.addEventListener('click', adicionarNome)