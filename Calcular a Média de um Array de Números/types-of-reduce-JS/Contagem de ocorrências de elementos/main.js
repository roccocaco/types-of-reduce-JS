/*
CONTAGEM DE OCORRENCIAS DE ELEMENTOS:

Método "reduce":

O "reduce" é usado para acumular um objeto ("acc") que vai contar o número de vezes que cada produto aparece no array.
O valor inicial do acumulador "acc" é UM OBJETO VAZIO "{}".

Função de Callback:

A função "(acc, product) => { acc[product] = (acc[product] || 0) + 1; return acc; }" é executada em cada elemento do array.
"acc" é o acumulador, que inicialmente é o objeto vazio "{}".
"product" é o elemento atual do array, ou seja, uma string que representa o nome de um produto.

Lógica da contagem:

acc[product] = (acc[product] || 0) + 1;

"acc[product]" verifica se o produto já existe como uma chave no objeto "acc".
Se existir, ele retorna o valor atual, que é o número de vezes que o produto já foi contado.
Se não existir ("undefind"), ele assume "0" como valor inicial.
Depois, "+ 1" incrementa o valor, aumentando a contagem desse produto.

O operador || está sendo usado aqui como uma forma de fornecer um valor padrão. Se acc[fruit] for "falsy" (ou seja, undefined), ele usa 0 como valor inicial para a contagem. 
Isso evita erros e garante que a contagem comece corretamente para cada nova fruta no objeto.

Retorno do Objeto:

Após atualizar a contagem do produto atual, a função "return acc" retorna o objeto acumulador atualizado.

Resultado Final:

Após o "reduce" percorrer (iterar) por todos os elementos do array, ele retorna um objeto que representa o número de vezes que cada produto apareceu no array.

Resumindo:

Esse código cria um objeto que conta quantas vezes cada produto apareceu no array "products". O método "reduce" é usado para acumular esse objeto, 
onde as chaves são os nomes dos produtos e os valores são as contagens de quantas vezes cada uma aparece no array.
*/



const products = ['vynil', 'DVD', 'digital', 'CD', 'DVD'];
const count = products.reduce((acc, product) => {
    acc[product] = (acc[product] || 0) + 1;
    return acc;
}, {});

console.log(count);