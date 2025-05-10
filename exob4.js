// Simulando gasolina

class Carro {
    constructor(marca,cor,gasolina){
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;
    }

    acelerar(km){
        let consumo = km / 14;

        this.gasolina -= consumo;
    }



    abastecer(litros){
        if(litros <= (48 - this.gasolina)){
            this.gasolina += litros;
        } else if (litros >= (48 - this.gasolina)){
            this.gasolina = 48;
        }
    }

}



let argo = new Carro('argo','preto',20);

argo.abastecer(12);

console.log(argo);

argo.acelerar(22);

console.log(argo);

argo.acelerar(88);

console.log(argo);

argo.abastecer(20);

console.log(argo);