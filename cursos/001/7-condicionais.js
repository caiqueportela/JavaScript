console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

const idadeComprador = 17;
const estaAcompanhada = true;

if (idadeComprador >= 18) {
    console.log('Comprador maior de idade!');
    listaDeDestinos.splice(1, 1);
} else if (estaAcompanhada) {
    console.log('Comprador está acompanhado!');
    listaDeDestinos.splice(1, 1)
} else {
    console.log('Comprador não é maior de idade, não posso vender!')
}

console.log(listaDeDestinos);