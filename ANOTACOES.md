# Anotações

Anotações sobre todo conteúdo visto sobre JavaScript e dicas.

## VisualStudio

Duplicar linha:
```
SHIFT + ALT + seta pra direção
```

Mover linhas:
```
ALT + seta pra direção
```

Comentar linhas:
```
CTRL + K + C
```

Descomentar linhas:
```
CTRL + K + U
```

Formatar código:
```
ALT + SHIFT + F
```

## JS

* Toda linha termina com ponto e virgula (mas isso não é obrigatório);
* Utiliza por padrão o método camel case para dar nomes a variáveis;
* É case sensitive;
* Qualquer valores entre aspas é identificado como texto literal;
* Efetua conversões de tipos caso possível;
* Casas decimais são separadas com ponto (**.**);
* Ao utilizar chaves (**{** **}**) tudo que estiver dentro delas é considerado um bloco de código;

## Comentários

Linha simples
```javascript
// Comentário não será executado
```

Multi linhas:
```javascript
/*
    Comentário
    em várias
    linhas
*/
```

## Variáveis

* Espaços na memória do computador onde armazenamos valores;
* Deve sempre utilizar nomes que identifique o que está armazenado;
* É uma boa prática declarar o escopo;
* O operados **+** concatena textos ou textos com outros valores;

Declaração:
```javascript
idade = 10;
```

Pode se realizar operações matemáticas:
```javascript
idade = 10 + 2;
```

Variável comum com escopo local:
```javascript
let idade = 22;
```

Valor constante (imutável):
```javascript
const idade = 22;
```

Interpolação de variáveis:
```javascript
const nome = "Caique";
const sobrenome = "Portela";
console.log(`${nome} ${sobrenome}`);
```

## Listas

Declaração:
```javascript
const lista = new Array(
    'item1',
    'item2',
);
```

Adicionar item:
```javascript
lista.push('novo item');
```

Remover x itens na posição indicada:
```javascript
lista.splice(1, 1);
```
Remove 1 item na posição 1.
**A primeira posição é a 0 e assim por diante**.

Acessar item na poisção específica:
```javascript
console.log(lista[0]);
```
Acessa na posição 0 (primeira).

Tamanho da lista:
```javascript
console.log(lista.length);
```

## Operadores lógicos

Realiza comparações para chegar em um valor **true** ou **false**.

**==** - Compara se dois valores são iguais

**>** - Compara se o valor da esquerda é maior que o da 

**>=** - Compara se o valor da esquerda é maior ou igual que o da direita

**<** - Compara se o valor da direita é maior que o da esquerda

**<=** - Compara se o valor da direita é maior ou igual o da esquerda

## Operadores condicionais

### SE (IF)

Declaração:
```javascript
const idade = 10
if (idade >= 18) {
    console.log('Maior de idade');
}
```
Realiza uma operação lógica e dependendo do resultado executa uma ação.

Posso executar uma ação caso a operação não de certo:
```javascript
const idade = 10
if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}
```

## Operadores de repetição (loop)

### WHILE

Declaração:
```javascript
let contador = 0;
while (contador < 3) {
    console.log(contador);
    contador++;
}
```
Executado bloco de código N vezes até que a condição seja falsa

### FOR

Declaração:
```javascript
for (let contador = 0; contador < 3; contador++)
    console.log(contador);
}
```
Semelhante ao while, mas possui mais parametros

## Funções nativas

Converter texto em número inteiro:
```javascript
parseInt("2");
```

Converter texto em número decimal
```javascript
parseFloat("2.5");
```

Exibir mensagem de log:
```javascript
console.log('texto');
```
O texto pode estar entre aspas simples (**'texto'**) ou duplas (**"texto"**).

Pode se passar vários textos para serem exibidos:
```javascript
console.log('texto', 'mensagem');
```
