/*
PRODUTO DE ELEMENTOS DE UM ARRAY

O método "reduce" é usado para percorrer (iterar) pelo o array e acumular um valor resultante.

A função de callback "(acc, curr) => acc * curr" MULTIPLICA o acumulador "acc" pelo valor atual "curr".

O "1" no final é o valor inicial do acumulador, necessário porque estamos realizando uma multiplicação (se fosse "0", o resultado sempre seria "0").

Como funciona ao percorrer (iterar) ?

Primeira iteração:

"acc" (acumulador) começa com o valor inicial, que é "1".
"curr" (valor atual) é o primeiro elemento do array, que é "1".
A função faz a multiplicação: "1 * 1 = 1".
O acumulador "acc" agora tem o valor "1".

Segunda iteração:

"acc" agora é "1" (resultante da iteração anterior).
"curr" é o segundo elemento do array, que é "2".
A função faz a multiplicação: "1 * 2 = 2".
O acumulador "acc" agora tem o valor de "2".

Terceira iteração:

"acc" agora é 2.
"curr" é o terceiro elemento do array, que é "3".
A função faz a multiplicação: "2 * 3 = 6".
O acumulador "acc" agora tem o valor "6".

Quarta iteração:

"acc" agora é "6".
"curr" é o quarto e último elemento do array, que é "4".
A função faz a multiplicação: "6 * 4 = 24".
O acumulador "acc" agora tem o valor "24".

Resultado final:

O "reduce" retorna o valor final do acumulador "acc", que é "24". Esse valor é atribuído à variavél "product".

Resumindo:

Este código calcula o produto de todos os números no array "[1, 2, 3, 4]", ou seja, "1 * 2 * 3 * 4", e exibe o resultado final, "24".
*/



const numbers = [1, 2, 3, 4];
const product = numbers.reduce((acc, curr) => acc * curr, 1);

console.log(product);