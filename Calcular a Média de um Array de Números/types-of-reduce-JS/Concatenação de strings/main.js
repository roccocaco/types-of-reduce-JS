/* CONCATENAÇÃO DE STRINGS */

const words = ['Hello', 'World'];
/*
Você está criando um array chamado WORDS, que contém duas strings: 'Hello' e 'World'
*/

const sentence = words.reduce((acc, word) => acc + ' ' + word);
/*
O método REDUCE é usado para combinar as palavras do array WORDS em uma únuca string.

A função callback do REDUCE recebe dois argumentos:

ACC (acumulador): começa com o primeiro item do array na primeira percorrida (iteração) e depois
armazena o resultado acumulado da concatenação.

WORD: a palavra atual do array durante a iteração.

Concatenação: A expressão acc + ' ' + word concatena o acumulador ACC (que começa com 'Hello') com a 
palavra atual word, adicionando um espaço ' ' entre elas.

Como não foi espeficicado um valor inicial para o REDUCE, ele usa o primeiro elemento do array ('Hello') como
valor inicial do acumulador e começa a concatenação a partir do segundo elemento.
*/

console.log(sentence);
/*
Este comando imprime (mostra) o resultado da concatenação, armazenado na constante SENTENCE.

A saída será 'Hello World'.
*/
