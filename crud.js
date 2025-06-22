class Cliente {

    static listaDeClientes = [];
    static contador = 0;

    constructor(nome,idade,sexo,email){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.email = email;
        this.id = Cliente.contador++;
        

        Cliente.listaDeClientes.push(this);

    }

    

    inserirCliente(nome,idade,sexo,email){
        new Cliente(nome,idade,sexo,email);     

    }

    static verClientes(){
        for(let clientes of Cliente.listaDeClientes){
            console.log (`Nome:${clientes.nome}
Idade:${clientes.idade}
Sexo:${clientes.sexo}
Email:${clientes.email}
ID: ${clientes.id}`);
        }
    }

    
    static atualizarDados(id, nome,idade,sexo,email){

        const cliente = this.listaDeClientes.find(i => i.id === id);

        
        
        if (nome !== undefined) cliente.nome = nome;
        if (idade !== undefined) cliente.idade = idade;
        if (sexo !== undefined) cliente.sexo = sexo;
        if (email !== undefined) cliente.email = email;

    }

    static deletarCliente(id){
        
        const index = this.listaDeClientes.findIndex(i => i.id == id);
        console.log(this.listaDeClientes[index])

        this.listaDeClientes.splice(index,1)


        


          
    }

}


let pessoa1 = new Cliente('Raul',22,'Masc','raul@email.com');

let pessoa2 = new Cliente('Larissa',24,'Fem','larissa@email.com');

console.log('Antes de atualização')
Cliente.verClientes()


Cliente.atualizarDados(0,'Raul de Souza Lima',24,'Masculino','raul.souzal@hotmail.com');
Cliente.atualizarDados(1,'Larissa de Jesus dos Santos',24,'Feminino','larissa@gmail.com');

console.log('Depois da atualização')
Cliente.verClientes()

Cliente.deletarCliente(0)
console.log("Depois q exclui")


Cliente.verClientes()