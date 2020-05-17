import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    static numeroDeContas = 0;

    constructor(agencia, cliente) {
        super(agencia, cliente, 0);
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor) {
        valor = valor * 1.1;
        return super._sacar(valor);
    }

}
