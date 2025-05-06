class Carro {
    constructor(marca,cor,gasolina){
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;
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