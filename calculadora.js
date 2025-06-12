let numero = document.querySelectorAll('td');
let texto = document.querySelector('#resultado');
let enviar = document.querySelector('#enviar');
let numero1;




numero.forEach((num) =>{
    num.addEventListener('click', () => {
        if (num.textContent != 'Enter'){  
            numero1 = num.textContent;
            texto.innerHTML += numero1;
            console.log(numero1);
        }

    })
    
})

enviar.addEventListener('click', () => {

    texto.innerHTML = numero1 * 2;
    console.log(`O tipo é ${typeof(numero1)} e seu valor ${numero1}`)
    console.log(parseInt(numero1))
    
})