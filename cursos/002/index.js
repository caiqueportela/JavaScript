import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente('Ricardo', 11122233309);
cliente1.conta = new ContaCorrente(1001, 9001);

const cliente2 = new Cliente('Alice', 33322233309);
cliente2.conta = new ContaCorrente(1001, 9002);

cliente1.conta.depositar(200);
cliente1.conta.depositar(150);
cliente2.conta.depositar(50);
cliente2.conta.depositar(200);

cliente1.conta.transferir(-300, cliente2.conta);

console.log(cliente1);
console.log(cliente2);

console.log(ContaCorrente.contasCriadas);