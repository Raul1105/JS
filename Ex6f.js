// Criar função que verifica o tipo de dado

function verificarDado(v){
    if (typeof(v) == 'number'){
        console.log(`O dado inserido é um number`);
    } else if (typeof(v) == 'boolean'){
        console.log(`O dado inserido é um boolean`)
    } else if (typeof(v) == "string"){
        console.log(`O dado inserido é do tipo string`);
    }
}


verificarDado('variavel');
verificarDado(23);
verificarDado(false);