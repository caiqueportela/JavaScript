export class SistemaAutenticacao {

    static login(autenticavel, senha) {
        if (!SistemaAutenticacao.ehAutenticavel(autenticavel)) return false;

        return autenticavel.autenticar(senha);
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }

}