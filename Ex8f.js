// Verificar se um texto é muito longo

function verificarTexto(n){
    if (n.length > 10){
        console.log(`Texto muito longo`);
    } else {
        console.log(`Texto dentro do limite`);
    }
}

verificarTexto("Esse texto esta muito grande");