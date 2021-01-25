pedidos = [{
    id: 1,
    cliente: "Edy",
    itens: [{
                id:1,
                nome: "camisa",
                valor: 10.00
            },
            {
                id:1,
                nome: "bermuda",
                valor: 20.00
            }],
    data: '24/01/2021'
},
{
id: 2,
cliente: "Lu",
itens: [{
            id:1,
            nome: "Vestido",
            valor: 100.00
        }
       ],
data: '24/01/2021'
},
]
/* Exmplo de uso */
console.log(pedidos[pedido.map(x => x.id).indexOf(2)].itens);

/** Metodo 1 Map */
var i = pedidos.map(item => {
    return item.id;
})
console.log(i.indexOf(1));

/** Metodo 2 Find Index */
var i = pedidos.findIndex(i => i.id === 2);
console.log(i);

/** Metodo 3 map ES2015 */
pedidos.map(x => x.id).indexOf(1);

/** Metodo 4 Filter */
var i = pedidos.indexOf(pedidos.filter(obj => {
    return obj.id == 2;
})[0]);
console.log(i);