export class Cliente {

    get nome() {
        return this._nome;
    }
    
    get cpf() {
        return this._cpf;
    }

    get senha() {
        return this._senha;
    }

    constructor(nome, cpf, senha) {
        this._nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

}
