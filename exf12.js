/*
Função de tabuada
*/

function tabuada(n){
    if (n < 1 || n > 10){
        console.log(`Erro!`)
    }

    for (let i = 1; i <= 10; i ++){
        console.log(`${i}X${n}=${i*n}`)
    }
}

tabuada(9)