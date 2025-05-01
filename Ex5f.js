// Criar função que verifica idade

function verificarIdade(idade){
    if (idade < 18){
        console.log(`Com a idade de ${idade} você não pode entrar na autoescola!`);
    } else {
        console.log(`Com a idade de ${idade} você pode entrar na autoescola!`);
    }
}

verificarIdade(18);
verificarIdade(15);