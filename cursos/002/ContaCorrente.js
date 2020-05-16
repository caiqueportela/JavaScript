export class ContaCorrente {

    static contasCriadas = 0;

    _agencia;
    _conta;
    _saldo = 0;
    //#saldo = 0;

    get agencia() {
        return this._agencia;
    }

    get conta() {
        return this._conta;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(agencia, conta) {
        this._agencia = agencia;
        this._conta = conta;
        ContaCorrente.contasCriadas++;
    }

    sacar(valor) {
        if (this._saldo < valor) return;
        if (valor <= 0) return;

        this._saldo -= valor;
        return valor;

    }

    depositar(valor) {
        if (valor <= 0) return;

        this._saldo += valor;
    }

    transferir(valor, contaDestino) {
        const valorSacado = this.sacar(valor);

        if (valorSacado) {
            contaDestino.depositar(valorSacado);
        }
    }

}