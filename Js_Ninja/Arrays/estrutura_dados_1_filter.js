var produtos = [{
    id: '1',
    nome: 'notebook',
    categoria: 'computador',
    valor: 5000.00,
    qtd: 3
},
{
    id: '2',
    nome: 'PC Gamer',
    categoria: 'computador',
    valor: 7000.00,
    qtd: 2
},
{
    id: '3',
    nome: 'teclado',
    categoria: 'acessorio',
    valor: 150.00,
    qtd: 10
}
];

/** Filter */

/* Filtra categoria */
var computdorFilter = produtos.filter(produto => {
   return produto.categoria == 'computador';
});
console.log(computdorFilter);
/*  */
var acessorioFilter = produtos.filter(produto => {
   return produto.categoria == 'acessorio'
});
console.log(acessorioFilter);

/* Preço menor que 7000.00 computador */
var menorSeteMil = produtos.filter(produto => {
    return (produto.categoria == 'computador' && produto.valor < 7000.00);
})
console.log(menorPreco);

/* Preço maior que 5000.00 computador */
var maiorCincoMil = produtos.filter(produto => {
    return (produto.categoria == 'computador' && produto.valor > 5000.00);
})
console.log(menorPreco);

/* Busca por ID */
var produtoId = produtos.filter(prod => {
   return prod.id == '1';
})
console.log(produtoId);