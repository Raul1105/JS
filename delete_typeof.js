/*
typeof mostra o tipo de dado declarado
delete deleta uma propriedade do objeto
*/

const pessoa = {
    nome: 'Raul',
    idade: 24,

};

console.log(typeof(pessoa))
delete pessoa.nome

console.log(pessoa)