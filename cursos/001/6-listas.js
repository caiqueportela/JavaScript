console.log('Trabalhando com listas');

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);

listaDeDestinos.push('Curitiba');

console.log('Destinos possíveis:');
console.log(listaDeDestinos);

listaDeDestinos.splice(2, 1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[0], listaDeDestinos[2]);