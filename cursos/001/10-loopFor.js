console.log(`Trabalhando com loop for`);

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

let destinoExiste = false;

for (let contador = 0; contador < listaDeDestinos.length; contador++) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
}

if (podeComprar && destinoExiste) {
    console.log('Pode viajar');
} else {
    console.log('Não pode viajar');
}