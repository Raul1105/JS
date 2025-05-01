// Imprimir um numero aleatorio com Math

function numeroAleatorio(min, max){
    console.log(Math.random() * (max - min) + min);
}

numeroAleatorio(0,100);