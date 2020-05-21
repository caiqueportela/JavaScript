import { currentInstance } from './controllers/NegociacaoController';

const negociacaoController = currentInstance();

document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
document.querySelector('[type=button]').onclick = negociacaoController.limpa.bind(negociacaoController);