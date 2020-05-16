console.log(`Trabalhando com loops`);

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

const idadeComprador = 19;
const estaAcompanhada = false;
let passagemComprada = false;
const destino = `Salvador`;

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < listaDeDestinos.length) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador++;
}

if (podeComprar && destinoExiste) {
    console.log('Pode viajar');
} else {
    console.log('Não pode viajar');
}