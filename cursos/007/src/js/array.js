const aprovados = ['Marcelo', 'Aline', 'Caique', 'Jorge', 'Gustavo', 'Ricardo'];

for (let nome of aprovados) {
    if (nome === 'Marcelo')
        console.log('Aprovado for');
}

const aprovadoIndex = aprovados.indexOf('Caique');
console.log(aprovadoIndex);

const aprovadoIncludes = aprovados.includes('Gustavo');
console.log(aprovadoIncludes);