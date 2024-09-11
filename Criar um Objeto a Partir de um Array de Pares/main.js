/* CRIAR UM OBJETO A PARTIR DE UM ARRAY DE PARES*/

const pairs = [['name', 'Ana'], ['age', 25], ['city', 'Cotia']];
/*  Um array de arrays (pares), onde cada sub-array contém uma chave e um valor*/

const object = pairs.reduce((acc, [key, value]) => {
/* Usando o método reduce para transformar o array de pares em um objeto*/   
/*  acc é o objeto acumulado, key e value são a chave e o valor do par atual*/ 

    acc[key] = value;
/* Atribui o valor ao campo correspondente no objeto com a chave sendo o 'key'*/

    return acc;
/* Retorna o objeto atualizado para a próxima iteração do reduce*/

}, {});
/* Inicializa o acc como um bjeto vazio {}*/

console.log(object); /* Exibe o objeto final*/