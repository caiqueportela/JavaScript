import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha('123456789');
const gerente = new Gerente("Ricardo", 5000, 12345678902);
gerente.cadastrarSenha('123456');

const cliente = new Cliente('Lais', 12345678903, '1234');
SistemaAutenticacao.login(cliente, '1234');

const estaLogado = SistemaAutenticacao.login(diretor, '123456789');
console.log(estaLogado);