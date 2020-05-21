export class DateHelper {

    constructor() {
        throw new Error(`This class cannot be instanced, it is abstract`);
    }

    static textoParaData(texto) {
        if (!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error(`Accepted format is yyyy-mm-dd`);

        return new Date(...texto.split('-').map((item, index) => item - index % 2));
    }

    static dataParaTexto(data) {
        return `${('0'+data.getDate()).slice(-2)}/${('0'+(data.getMonth()+1)).slice(-2)}/${data.getFullYear()}`;
    }

}