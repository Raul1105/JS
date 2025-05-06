// Endereços

class Endereco{
    constructor(rua,bairro,cidade,estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    atualizarRua(rua){
        this.rua = rua;
    }

    atualizarBairro(bairro){
        this.bairro = bairro;
    }

    atualizarCidade(cidade){
        this.cidade = cidade;
    }

    atualizarEstado(estado){
        this.estado = estado;
    }
}

let pessoa = new Endereco('Rua Peroba','Parque Jacaranda','Taboão da Serra','SP');
let pessoa1 = new Endereco('Rua das Perobas','Jabaquara','São Paulo','SP');

console.log(pessoa);
console.log(pessoa1);

pessoa.atualizarCidade('Embu das Artes');
console.log(pessoa)