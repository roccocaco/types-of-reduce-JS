/* REMOVER DUPLICATAS DE UM ARRAY*/

const numbers = [1, 2, 2, 3, 4, 4, 5];
/* Array de números com alguns valores repetidos*/

const unique = numbers.reduce((acc, number) => {
/* Usa o método reduce para criar um array com valores únicos*/

    if(!acc.includes(number)) {
/* Verifica se o número atual não está presente no acc*/
    
    acc.push(number);
/* Adiciona o número ao acc se ele não estiver presente*/    
}
    return acc;
/* Retorna o acc atualizado para a próxima iteração*/    

}, []);
/* Inicializa o acc como um array vazio*/ 

console.log(unique);
/* Exibe o array com números únicos*/