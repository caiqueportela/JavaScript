class NegociacaoService {

    constructor() {
        this._httpService = new HttpService();
    }

    obterNegociacoesDaSemana() {
        return this._httpService.get('negociacoes/semana')
            .then(negociacoes => negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
            .catch(erro => {
                throw new Error('Não foi possível obter as negociações da semana');
            });
    }

    obterNegociacoesDaSemanaAnterior() {
        return this._httpService.get('negociacoes/anterior')
                .then(negociacoes => negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                .catch(erro => {
                    throw new Error('Não foi possível obter as negociações da semana anterior');
                });
    }

    obterNegociacoesDaSemanaRetrasada() {
        return this._httpService.get('negociacoes/retrasada')
                .then(negociacoes => negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                .catch(erro => {
                    throw new Error('Não foi possível obter as negociações da semana retrasada');
                });
    }

    obterNegociacoes() {
        return Promise.all([
                this.obterNegociacoesDaSemana(),
                this.obterNegociacoesDaSemanaAnterior(),
                this.obterNegociacoesDaSemanaRetrasada(),
            ])
            .then(negociacoes => negociacoes.reduce((todasNegociacoes, listaNegociacoes) => todasNegociacoes.concat(listaNegociacoes), []))
            .catch(erro => {
                throw new Error(erro)
            });
    }

}