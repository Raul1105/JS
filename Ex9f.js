// Imprimir a potencia

function imprimirPotencia(a,b){
    return Math.pow(a,b);
}

function imprimirPotencia2(a,b){
    return a ** b;
}

let potencia = imprimirPotencia(3,2);

let potencia2 = imprimirPotencia2(3,2);

console.log(`Potencia com Math.pow: ${potencia}
Potencia com **: ${potencia2}`);
