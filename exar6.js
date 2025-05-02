// Função que confere arrays

function conferirArrays(array){
    if (array.length > 5){
        console.log(`Seu array possui muitos elementos`);
    } else {
        console.log(`Seu array possui poucos elementos`);
    }
}

let ar1 = [0,1,2,3,4,5];
let ar2 = [0,1,2]

conferirArrays(ar1);
conferirArrays(ar2);