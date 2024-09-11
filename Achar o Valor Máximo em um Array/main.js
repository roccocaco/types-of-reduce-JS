/* ACHAR O VALOR MÁXIMO EM UM ARRAY*/

const numbers = [10, 20, 30, 40, 50]; /* Array de números para encontrar o maior valor*/
const max = numbers.reduce((max, curr) =>
(curr > max ? curr : max), number[0]);
/* 
O método reduce percorre o array, comparando o valor atual com o valor máximo até o momento
Se o valor atual for maior que o valor máximo, ele substitui o valor máximo
A redução começa com o primeiro número do array como valor inicial
*/
