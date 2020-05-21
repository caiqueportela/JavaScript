export class ProxyFactory {

    constructor() {
        throw new Error(`This class cannot be instanced, it is abstract`);
    }
    
    static create(objeto, props, acao) {
        return new Proxy(objeto, {
            get(target, prop, receiver) {
                if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
                    return function() {
                        const result = Reflect.apply(target[prop], target, arguments);
                        acao(target);
                        return result;
                    }
                }
                
                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver) {
                const result = Reflect.set(target, prop, value, receiver);

                if (props.includes(prop))
                    acao(target);

                return result;
            }
        });
    }

    static _ehFuncao(func) {
        return typeof(func) === typeof(Function);
    }

}