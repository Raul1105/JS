let numero = document.querySelectorAll('td');
let texto = document.querySelector('#resultado');
let enviar = document.querySelector('#enviar');


numero.forEach((num) =>{
    num.addEventListener('click', () => {
        let n = num.textContent
        texto.innerHTML += n;
    })
})

enviar.addEventListener('click', () => {
    
})