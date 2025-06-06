/*
Data e hora
*/
function hora(){
    let agora = new Date();
    let hora = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    console.log(`Hora atual: ${hora}:${minutos}:${segundos}`)
}



hora()