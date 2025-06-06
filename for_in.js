/*for in percorre os itens dos objetos */

let pessoa = {
    nome: 'Raul',
    idade:24,
    genero:'masculino'
};

for (let propriedade in pessoa){
    console.log(`${propriedade}: ${pessoa[propriedade]}`)
}