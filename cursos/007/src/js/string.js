const nome = 'Caique';
const sobrenome = 'Portela';

const nomeCompleto = `${nome} ${sobrenome}`;

const nomeCompletoPadStart = sobrenome.padStart(nome.length+sobrenome.length, nome);
document.querySelector('#stringPadStart').innerHTML = nomeCompletoPadStart;

const nomeCompletoPadEnd = nome.padEnd(nome.length+sobrenome.length, sobrenome);
document.querySelector('#stringPadEnd').innerHTML = nomeCompletoPadEnd;

const numeroCartao = '0123';

document.querySelector('#numeroCartao').innerHTML = numeroCartao.padStart(16, '*');
