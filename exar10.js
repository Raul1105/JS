// Criar calculadora

let calculadora = {
    somar: function(a,b){
        return a + b;
    },
    subtrair: function(a,b){
        return a - b;
    },
    multiplicar:function(a,b){
        return a * b;
    },
    dividir:function(a,b){
        return a / b;
    }
}

console.log(`Operações com os numero 25 e 10:
Soma: ${calculadora.somar(25,10)}
Subtração: ${calculadora.subtrair(25,10)}
Multiplicação: ${calculadora.multiplicar(25,10)}
Divisão: ${calculadora.dividir(25,10)}`)