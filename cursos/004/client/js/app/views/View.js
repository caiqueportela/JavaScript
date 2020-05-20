class View {

    constructor(elemento) {
        if (this.constructor === View)
            throw new Error(`This class cannot be instanced, it is abstract`);

        this._elemento = elemento;
    }

    template() {
        throw new Error(`This method is abstract, need be override`);
    }

    update(modelo) {
        this._elemento.innerHTML = this.template(modelo);
    }

}