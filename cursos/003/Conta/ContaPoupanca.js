import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {

    constructor(agencia, cliente, saldoInicial) {
        super(agencia, cliente, saldoInicial);
    }

    sacar(valor) {
        valor = valor * 1.02;
        return super._sacar(valor);
    }

}