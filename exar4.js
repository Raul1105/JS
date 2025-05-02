// Adicionar e remover propriedades no objeto

let onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 2
};

onibus.janelas = 20;

delete onibus.rodas;

console.log(`O onibus agora não possui rodas
O limite de passageiros é de ${onibus.limitePassageiros} passageiros
Possui ${onibus.portas} portas
Adicionamos ${onibus.janelas} janelas`)