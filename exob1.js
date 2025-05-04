// Simular uma conta bancaria

class Conta {
    constructor(saldo = 0) {
        this.saldo = saldo
    }

    set depositar(valor){
        this.saldo += valor
    }

    get exibirValor(){
        return `Seu saldo é de ${this.saldo}`;
    }

    set sacar(valor){
        this.saldo -= valor;
    }
    
}

let conta1 = new Conta();


conta1.depositar = 5;
console.log(conta1.exibirValor)

conta1.depositar = 10;
console.log(conta1.exibirValor)

conta1.sacar = 2

console.log(conta1.exibirValor)

