class Conta{
    constructor(saldoCC = 0,saldoP = 0,jurosP = 0 ){
        this.saldoCC = saldoCC;
        this.saldoP = saldoP;
        this.jurosP = jurosP;
    }

    depositoCorrente(valor){
        this.saldoCC += valor;
    }

    depositoPoupanca(valor){
        this.saldoP += valor;
    }

    saqueCorrente(valor){
        if (valor > this.saldoCC){
            console.log('Valor insfuciente em conta corrente');
        } else {
            this.saldoCC -= valor;
        }
    }

    saquePoupanca(valor){
        if (valor > this.saldoP){
            console.log('Valor insuficiente na poupança');
        } else {
            this.saldoP -= valor;
        }
    }

    transferirPoupanca(valor){
        if (valor > this.saldoCC){
            console.log('Valor insuficiente em conta corrente');
        }  else {
            this.saldoP += valor;
            this.saldoCC -= valor;
        }
    }

    transferirCorrente(valor){
        if (valor > this.saldoP){
            console.log('Valor insuficiente em poupança');
        } else {
            this.saldoP -= valor;
            this.saldoCC += valor;
        }
    }

    aplicarJuros(){
        let juros = (this.saldoP * 8) / 100;
        this.saldoP += juros;
    }

}

class Conta2 extends Conta {
    constructor(saldoCC, saldoP, jurosP){
        super(saldoCC,saldoP,jurosP)
    }

    aplicarJuros(){
        let juros = (this.saldoP * 16) / 100;
        this.saldoP += juros;
    }


}

let conta = new Conta();
let conta2 = new Conta2();

console.log(`saldo conta corrente:R$ ${conta.saldoCC}
saldo poupança: R$ ${conta.saldoP}`);

console.log(`saldo2 conta corrente: ${conta2.saldoCC}
saldo2 poupança: ${conta2.saldoP}`)

conta.depositoCorrente(1500);

conta2.depositoCorrente(1500);

console.log(`saldo conta corrente:R$ ${conta.saldoCC}
saldo poupança: R$ ${conta.saldoP}`);

console.log(`saldo2 conta corrente: ${conta2.saldoCC}
saldo2 poupança: ${conta2.saldoP}`)

conta.transferirPoupanca(1300);

conta2.transferirPoupanca(1300);

console.log(`saldo conta corrente:R$ ${conta.saldoCC}
saldo poupança: R$ ${conta.saldoP}`);
    
console.log(`saldo2 conta corrente: ${conta2.saldoCC}
saldo2 poupança: ${conta2.saldoP}`)

conta.aplicarJuros();

console.log(`saldo conta corrente:R$ ${conta.saldoCC}
saldo poupança: R$ ${conta.saldoP}`);
    
console.log(`saldo2 conta corrente: ${conta2.saldoCC}
saldo2 poupança: ${conta2.saldoP}`)

conta2.aplicarJuros();

console.log(`saldo conta corrente:R$ ${conta.saldoCC}
saldo poupança: R$ ${conta.saldoP}`);
    
console.log(`saldo2 conta corrente: ${conta2.saldoCC}
saldo2 poupança: ${conta2.saldoP}`)