const iteratorAlimentos = {
    [Symbol.iterator]: () => {
        let id = 0;
        return {
            next: () => {
                id++;
                const alimento = tabela.get('alimentos', id);
                if (alimento)
                    return { value: alimento, done: false };
                return { done: true };
            }
        }
    }
};

for (const alimento of iteratorAlimentos) {
    console.log(alimento);
}