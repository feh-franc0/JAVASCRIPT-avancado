//? Spread Operator = sao aqueles ... (tres pontos) para fazer a copia de um obejto ou de um array.


//TODO ARRAY:

var pessoa = {
    name: "José Silva",
    idade: 32,
}

var contato = {
    telefone: 8765432,
    email: "jose@gmail.com"
}


//* spread operator pode fazer uma copia de um objeto ou array, criando um novo array ou objeto para a gente poder manipular sem alterar o original
var copia = {...pessoa}
copia.idade = 88;

console.log(pessoa);
console.log(copia);


//* podemos adicionar um novo elemento dentro do array ou objeto
var copia = {...pessoa, cidade:"Rio de Janeiro", telefone: contato.telefone}
copia.idade = 88;

console.log(pessoa);
console.log(copia)


//* podemos juntar dois objetos ou arrays em um só
var copia = {...pessoa, ...contato}
copia.idade = 88;

console.log(pessoa);
console.log(copia)




// TODO OBJETO:

var notar_turma1 = [10, 8, 4, 3];

var notas_turma2 = [4, 5, 4, 6];

var todas_notas = [...notar_turma1, ...notas_turma2]

console.log(todas_notas)