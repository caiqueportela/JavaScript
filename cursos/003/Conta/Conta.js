import { Cliente } from "../Cliente.js";

export class Conta {

    get agencia() {
        return this._agencia;
    }

    set cliente(cliente) {
        if (cliente instanceof Cliente) {
            this._cliente = cliente;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente, saldoInicial) {
        if (this.constructor === Conta) {
            throw new Error('Você não pode instanciar um objeto do tipo Conta');
        }

        this._agencia = agencia;
        this.cliente = cliente;
        this._saldo = saldoInicial;
    }

    sacar(valor) {
        throw new Error('Método abstrato')
    }

    _sacar(valor) {
        if (this._saldo < valor) return;
        if (valor <= 0) return;

        this._saldo -= valor;
        return valor;
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    tranferir(valor, conta) {
        if (!(conta instanceof Conta)) return;

        const valorSacado = this.sacar(valor);

        if (valorSacado) {
            conta.depositar(valorSacado);
        }
    }

}