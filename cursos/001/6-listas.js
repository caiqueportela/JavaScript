console.log('Trabalhando com listas');

const listadeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);

listadeDestinos.push('Curitiba');

console.log('Destinos possíveis:');
console.log(listadeDestinos);

listadeDestinos.splice(2, 1);
console.log(listadeDestinos);

console.log(listadeDestinos[0], listadeDestinos[2]);