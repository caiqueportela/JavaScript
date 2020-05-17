export class Funcionario {

    constructor(nome, salario, cpf) {
        if (this.constructor === Funcionario) {
            throw new Error('Abstract class Funcionario');
        }

        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;
        this._bonificacao = 1;
        this._senha;
    }

    get senha() {
        return this._senha;
    }

    cadastrarSenha(senha) {
        this._senha = senha;
    }

    autenticar(senha) {
        return this._senha === senha;
    }

}