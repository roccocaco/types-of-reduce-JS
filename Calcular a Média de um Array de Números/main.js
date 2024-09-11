/*CALCULAR A MÉDIA DE UM ARRAY DE NÚMEROS*/ 

const numbers = [10, 20, 30, 40, 50];
const average = numbers.reduce((total, number, _, array) => {
/* total é o acc que armazena a soma parcia; dos valores divididos pelo comprimento do array */ 
/* number é o valor atual do array que está sendo processado*/
/* O terceiro parâmetro (_) é o índice do item atual e não está sendo utilizado*/  
/* O quarto parametro (array) é o array original, que é usado para obter o comprimento do array*/ 

    return total + number / array.length;
/* Adiciona o valor atual (number) dividido pelo comprimento do array (array.length) ao acc total*/ 

}, 0);
/* Inicializa o acc total com o valor 0.*/ 

console.log(average);
