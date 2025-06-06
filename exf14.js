/*
Retorna ano atual
*/

function ano(){
    let agora = new Date()
    let ano = agora.getFullYear()

    console.log(`Estamos no ano de ${ano}`)
}

ano()