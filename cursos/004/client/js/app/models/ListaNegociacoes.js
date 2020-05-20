class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        if (!negociacao instanceof Negociacao)
            throw new Error(`Invalid parameter`);

        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

}