/* Teste Console */
 
/**Estrutura Array */
var nomes = ["Miguel", "Luciana","Edson"];

/**Estrutura Objeto */
var objNomes = {nome: "Miguel", idade:9, genero: "Masculino", nascimento:"18/02/2013" };
console.log(objNomes);

/**Acessando propriedades do objeto */
console.log(objNomes.nome);
console.log(objNomes.idade);
console.log(objNomes.genero);
console.log(objNomes.nascimento);

/* Lista de convidados com objetos */
convidados = [];
function list(){
    console.log(convidados);
}

/**Novo convidado */
function add(){
    id = Number(prompt("Digite o Identificado : "));
    /* Map para verificar se já exite o Id */
    existe = convidados.map(function(e) {
        return e.id;
    });
    if (existe.indexOf(id) != -1 ) {
        return "Id já cadastrado!";
    }   

    nome = prompt("Digite o nome: ");
    idade = Number(prompt("Digite a idade: "));
    convidados.push( {id: id, nome: nome, idade: idade } );
    this.list();
}

/**Deleta convidado */
function del(){
    id = Number(prompt("Digite o identificador para exclusão: "));    
    existe = convidados.map(function(e) {
        return e.id;
    });
    convidados.splice(existe.indexOf(id),1);
    this.list();
}


