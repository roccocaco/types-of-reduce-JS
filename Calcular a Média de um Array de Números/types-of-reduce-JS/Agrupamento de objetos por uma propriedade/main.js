/* AGRUPAMENTO DE OBJETOS POR UMA PROPRIEADE */

const people = [
    { name: 'Brandon', age: 22},
    { name: 'John', age: 35},
    { name: 'Elton', age: 77},
];
/* Cada objeto no array representa uma pessoa com duas propriedades: NAME e AGE. */

const groupedByAge = people.reduce((acc, person) => {   
/* 
Aqui está criando uma nova constante chamada GROUPEDBYAGE.

Esta constante é o resultado da aplicação do método REDUCE no array PEOPLE.

O REDUCE é um método que acumula um valor conforme percorre (itera) pelo array.

A função callback passada ao REDUCE recebe dois argumentos principais:

ACC: o acumulador onde o resultado final será armazenado.
PERSON: o objeto atual do array PEOPLE em cada iteração.
*/

    const key = person.age;
/*
Para cada pessoa no array, você está criando uma variável KEY que armazena o valor da propriedade
AGE da pessoa atual.

Isso significa que a KEY vai assumir os valores 22, 35, ou qualquer outro valor de idade que as pessoas possam ter.
*/     

    if(!acc[key]) {
/*
Aqui, verifica se o acumulador (acc) já possui uma chave correspondente ao valor de KEY (a idade da pessoa).

O operador (!) verifica se a chave não existe.
*/    

        acc[key] = [];
/*
Se a chave ainda não existir no acumulador (acc), você cria uma nova chave (key) e inicializa um array vazio para essa chave.
*/

    }
    acc[key].push(person);
/*
Nesta linha, você adiciona a pessoa atual ao array correspondente à sua idade (a chave KEY) dentro do acumulador.

Isso efetivamente agrupa as pessoas pela idade.
*/    

    return acc;
/*
A função callback retorna o acumulador atualizando após processar cada pessoa do array.

Este retorno é essencial para que o REDUCE possa continuar acumulando os resultados ao longo das percorridas (iterações). 
*/

}, {});
/*
Esta parte final do código especifica o valor inicial do acumulador (acc), que é um objeto vazio {}.

O REDUCE começa com esse objeto vazio e o preenche com os arrays de pessoas agrupadas por idade.
*/

console.log(groupedByAge);
/*
Ao final de todas as iterações, a constante GROUPEDBYAGE conterá um objeto onde cada chave é uma idade e o valor
é um array de pessoas com essa idade. 
*/