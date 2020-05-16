import { ContaCorrente } from "./ContaCorrente.js";

export class Cliente {

    nome;
    cpf;

    _conta;

    set conta(conta) {
        if (conta instanceof ContaCorrente) {
            this._conta = conta;
        }
    }

    get conta() {
        return this._conta;
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

}