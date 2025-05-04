// Simulação de mercado

class Carrinho{
    constructor(quantidadeTotal = 0,valorTotal = 0){
        this.itens = [];
        this.quantidadeTotal = quantidadeTotal,
        this.valorTotal = valorTotal
    }

    inserirItem(itens,valor){
        this.itens.push(itens)
        this.quantidadeTotal += 1;
        this.valorTotal += valor;
    }
}

let cliente = new Carrinho()
cliente.inserirItem('Arroz',5)
cliente.inserirItem('Feijão',89)



console.log(`${cliente.itens}`)