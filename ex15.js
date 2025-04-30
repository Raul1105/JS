// conferindo se um numero é primo

let num = 4;
let divisoes = 0;

for (let i = 0;i <= num; i++){
    if (num % i == 0){
        divisoes++;
        console.log(divisoes);
    }
}

if (divisoes == 2) {
    console.log(`O numero ${num} é primo!`);
} else {
    console.log(`O numero ${num} não é primo`);
}