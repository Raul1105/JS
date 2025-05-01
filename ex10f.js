// Loop com function

function recursiva(n){

    if (n % 2 == 0){
        console.log(n);
    }

    if (n < 0){
     console.log(`Fim do loop`)
    } else {
        recursiva(n - 1);
    }
    
}

recursiva(11589)