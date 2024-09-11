/* ACHATAMENTO DE UM ARRAY DE ARRAYS (FLAT) */

const arrays = [[1, 2], [3, 4], [5, 6]];
/*
Aqui, está criando uam constante chamada ARRAYS que é um array de arrays. Cada sub-array contém dois números.
*/

const flattened = arrays.reduce((acc, curr) => acc.concat(curr), []);
/*
O método REDUCE é usado para "achatar" (flatten) o array de arrays em um único array.

Detalhamento do REDUCE:

arrays.reduce(...): Aplica o método REDUCE ao array arrays.

(acc, curr) => acc.concat(curr): Função de callback usada pelo REDUCE. Recebe dois parâmetros:

ACC (acumulador): Armazena o valor acumulado durante as iterações.

CURR (atual): O array atual sendo processado (ou seja, um dos sub-arrays no array principal).

acc.concat(curr): Concatena o caumulador ACC com o array atual CURR. O método CONCAT combina 
os dois arrays em um único array.

[]: Valor inicial do acumulador. Começa como um array vazio. Isso significa que o ACC começará 
como [] e será preenchido com os elementos dos sub-arrays.
*/

console.log(flattened);
/*
Este comando imprime (mostra) o resultadi final armazenado na constante FLATTENED.

O resultado é o array achatado: [1, 2, 3, 4, 5, 6].
*/

/*
RESUMO:

O código usa o método REDUCE para combinar todos os sub-arrays em um único array.

acc.concat(curr) é o passo crucial que efetivamente achata o array de arrays.

O valor inicial [] garante que o ACC comece vazio e acumule os elementos dos sub-arrays 
conforme o REDUCE itera sobre o array ARRAYS.
*/