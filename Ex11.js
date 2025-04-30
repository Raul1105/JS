// Verificando se pode dirigir

let idade = 17;
let cnh = false;

if (idade >= 18 && cnh == true){
    console.log(`Você pode dirigir!`);
} else if (idade < 18 && cnh == false){
    console.log(`Você não pode dirigir pois não possui CNH nem é maior de idade`);
} else if (idade >= 18 && cnh == false){
    console.log(`Você não pode dirigir pois não possui CNH!`);
}