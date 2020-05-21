import { HttpService } from "./HttpService";
import { NegociacaoDao } from "../dao/NegociacaoDao";
import { ConnectionFactory } from './ConnectionFactory';
import { Negociacao } from '../models/Negociacao'

export class NegociacaoService {

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

    cadastra(negociacao) {
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.adiciona(negociacao))
            .then(() => 'Negociação adicionada com sucesso!')
            .catch(erro => {
                throw new Error('Não foi possível adicionar a negociação')
            });
    }

    lista() {
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.listaTodos())
            .catch(erro => {
                throw new Error('Não foi possível obter as negociações');
            });
    }

    apaga() {
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.apagaTodos())
            .catch(erro => {
                throw new Error('Não foi possível apagar as negociações');
            });
    }

    importa(listaAtual) {
        return this.obterNegociacoes()
            .then(negociacoes => 
                negociacoes.filter(negociacao => 
                    !listaAtual.some(negociacaoExistente => 
                        negociacao.isEquals(negociacaoExistente)))
            )
            .catch(erro => {
                throw new Error('Não foi possível importar as negociações');
            });
    }

}