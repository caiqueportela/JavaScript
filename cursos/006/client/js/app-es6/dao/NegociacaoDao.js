import { Negociacao } from "../models/Negociacao";

export class NegociacaoDao {

    constructor(connection) {
        this._connection = connection;
        this._store = 'negociacoes';
    }

    adiciona(negociacao) {
        return new Promise((resolve, reject) => {
            const request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(negociacao);

            request.onsuccess = (e => {
                resolve();
            });

            request.onerror = (e => {
                reject(e.target.error.name);
            });
        });
    }

    listaTodos() {
        return new Promise((resolve, reject) => {
            const cursor = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .openCursor();

            const negociacoes = [];

            cursor.onsuccess = e => {
                const atual = e.target.result;

                if (atual) {
                    const dado = atual.value;
                    negociacoes.push(new Negociacao(dado._data, dado._quantidade, dado._valor));
                    atual.continue();
                } else {
                    resolve(negociacoes);
                }
            };

            cursor.onerror = e => {
                reject(e.target.error.name);
            };
        });
    }

    apagaTodos() {
        return new Promise((resolve, reject) => {
            const requisicao = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .clear();

            requisicao.onsuccess = (e => resolve('Negociações removidas com sucesso!'));

            requisicao.onerror = (e => reject('Não foi possível remover as negociações'));
        });
    }

}