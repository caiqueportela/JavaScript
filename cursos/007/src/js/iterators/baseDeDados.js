function tabelaAlimentos() {
    const tabelas = {
        alimentos: {
            1: { nome: 'Feijão' },
            2: { nome: 'Arroz' },
            3: { nome: 'Batata' }
        }
    };

    return {
        get: (nome, id) => tabelas[nome][id],
        asyncGet: (nome, id) => delay(50).then(() => tabelas[nome][id])
    }
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const tabela = tabelaAlimentos();