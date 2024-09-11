/*
SOMA DE ELEMENTOS DE UM ARRAY

O método "reduce" é usado para acumular todos os elementos de um array em um único valor.

Ele aceita dois parâmetros principais: 

Uma função de callback que define como os valores serão acumulados. 
Um valor inicial para o acumulador (neste caso, "0").

A função de callback "(acc, curr) => acc + curr" tem dois parâmetros:

"acc" (acumulador): armazena o valor acumulado até o momento. 
"curr" (atual): representa o elemento atual do array sendo processado.

A cada vez que repetir (iterar), a função soma o valor do acumulador "acc" com o valor atual "curr".

Valor inicial ("0"):

O segundo argumento passado para o "reduce" ("0") é o valor inicial do acumulador.

Resultado final:

A soma final de todos os elementos do array é armazenada na constante "sum".
*/




const numbers = [2, 5, 7, 9, 11];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
