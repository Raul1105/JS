/*
for each usa tres argumentos (nome_dos_itens,index,array(completo))
*/

let estudantes = [
    {nome:'Raul', idade: 24},
    {nome:'Larissa',idade:24},
    {nome:'Leticia',idade:28},
    {nome:'Elisete',idade:49}
];

estudantes.forEach((estudante, index) => {
    console.log(`${index + 1}° aluno Nome:${estudante.nome} idade:${estudante.idade}`)
})

estudantes.forEach((estudante) =>{
    console.log(estudante)
})

idadeTotal = 0;

estudantes.forEach((estudante) =>{
    idadeTotal += estudante.idade;
})

mediaIdade = idadeTotal / estudantes.length;

console.log(`A medida de idade dos alunos é de ${mediaIdade.toFixed(0)} anos`);