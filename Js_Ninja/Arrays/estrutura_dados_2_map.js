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

/* calcula o total dos produtos */

var somaProd = produtos.map(prod => {
       return {
        id : prod.id,
        nome : prod.nome,
        categoria: prod.categoria,
        valor: prod.valor,
        qtd: prod.qtd,
        total:  prod.qtd * prod.valor,
       }       
      
})
console.log(somaProd);

/* calcula o reajuste dos produtos */

var reajuste = produtos.map(prod =>{

    obj = {
        id : prod.id,
        nome : prod.nome,
        categoria: prod.categoria,
        valor: prod.valor + (prod.valor * 0.10),
        qtd: prod.qtd,
        total:  prod.qtd * (prod.valor + (prod.valor * 0.10)), 
    }

    return obj;
})

console.log(reajuste);

/* Motra o nome dos produtos e o valor unitário */

var prodValor = produtos.map(prod => {
    return {    
     nome : prod.nome,   
     valor: prod.valor    
    }  
})
console.log(prodValor);