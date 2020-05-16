console.log(`Trabalhando com condicionais encadeados`);

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

const idadeComprador = 17;
const estaAcompanhada = true;
const passagemComprada = true;

if (passagemComprada && (idadeComprador >= 18 || estaAcompanhada)) {
    console.log('Comprador pode viajar!');
    listaDeDestinos.splice(1, 1);
} else {
    console.log('Comprador não é maior de idade, não posso vender!')
}

console.log(listaDeDestinos);