let contador = 1;

class Cliente {

    static listaDeClientes = [];
    static contador = 0;

    constructor(nome,idade,sexo,email){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.email = email;
        this.id = contador;
        contador++;

        Cliente.listaDeClientes.push(this);

    }

    

    inserirCliente(nome,idade,sexo,email){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.email = email;
        this.id = contador;        

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

        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.email = email;
        this.id = id;        
        id -= 1
        

        for(let pessoa in Cliente.listaDeClientes){
            if(Cliente.listaDeClientes[pessoa].id == Cliente.listaDeClientes[id].id){
                if(idade == null){
                    idade = this.idade;
                } else {
                    Cliente.listaDeClientes[pessoa].idade = idade;
                }

                if(nome == null){
                    nome = this.nome;
                } else {
                    Cliente.listaDeClientes[pessoa].nome = nome;
                }

                if(sexo == null){
                    sexo = this.sexo;
                } else {
                    Cliente.listaDeClientes[pessoa].sexo = sexo;
                }

                if(email == null){
                    email = this.email;
                } else {
                    Cliente.listaDeClientes[pessoa].email = email;
                }
            }
        }


        


    }


}


let pessoa1 = new Cliente('Raul',24,'Masc','raul@email.com');

let pessoa2 = new Cliente('Larissa',24,'Fem','larissa@email.com');

console.log('Antes de atualização')
Cliente.verClientes()


Cliente.atualizarDados(1,'Raul de Souza Lima',24,'Masculino','raul.souzal@hotmail.com');
Cliente.atualizarDados(2,'Larissa de Jesus dos Santos',25,'Feminino','larissa@gmail.com');

console.log('Depois da atualização')
Cliente.verClientes()