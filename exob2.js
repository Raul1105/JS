// Simulando carrinho

class Carrinho{
    constructor(itens,quantidade,valorTotal){
        this.itens = itens;
        this.quantidade = quantidade;
        this.valorTotal = valorTotal;
    }

    adicionarItem(item){

        let contador = 0;

        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].quantidade += item.quantidade;
                contador = 1;
            }
        }

        if(contador == 0){
            this.itens.push(item);
        }

        

        this.quantidade += item.quantidade;
        this.valorTotal += item.quantidade * item.preco;
    }

    removerItem(item){
        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id){
                
                let objeto = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function (objeto) {return objeto.id == item.id})

                this.itens.splice(index,0);
            }

            this.quantidade -= item.quantidade;
            this.valorTotal -= item.quantidade * item.preco;
        }
    }

}

let cliente = new Carrinho([{
    id: '01',
    nome: 'Arroz',
    quantidade:1,
    preco:30
},
{
    id:'02',
    nome:'Feijao',
    quantidade:3,
    preco:20
}
],4,90);

cliente.adicionarItem({
    id: '01',
    nome: 'Arroz',
    quantidade:2,
    preco:30
})


cliente.removerItem({
    id:'01',
    nome:'Arroz',
    quantidade:1,
    preco:30
})

console.log(cliente);