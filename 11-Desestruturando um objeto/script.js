// DESESTRUTURAR UM OBJETO; como copiar uma parte do objeto

// vai pegar o objeto aluno, pegar apenas a matricula e criar uma var com o nome corresponte a chave do objeto que voce deseja
// PRECISAMOS RESPEITAR OS NOMES DAS PROPRIEDADES, TENDO O NOME DA VARIAVEL O MESMO QUE A CHEVE DO OBJT

var aluno = {
    matricula: 1234,
    nome: "Marcos",
    telefone: 984328419,
    cidade: "Barra do piraí"
}


var { matricula } = aluno;

console.log(matricula)

// podemos pegar dois valores e atribuir a variavel com o mesmo nome
var {matricula,nome} = aluno;

console.log(matricula)
console.log(nome)




// VAMOS CRIAR UM NOVO OBJETO QUE PEGA TODAS AS PROPRIEDADES DO ALUNO, UMA FORMA DE COPIAR UM OBJETO 

var {...copia} = aluno;

copia.matricula = 654321;
console.log(aluno)
console.log(copia)


// Tem como atribuirmos a propriedade nome em uma variavel e o resto em um novo objeto, o objeto novo NAO tera a propriedade nome

var pessoa = {
    cpf: 123321123-32,
    nome: "Fabio",
    telefone: 9721382133,
    cidade: "São Paulo"
}

var { cpf, ...copiaPessoa } = pessoa;
copia.matricula = 654321;
console.log(pessoa)
console.log(copiaPessoa)
console.log(cpf)


// Quando usamos ARRAY é muito importante a posicao que voce bota para desestruturar(o nome n importa, o que importa é a pposicao de cada index no array)

var aluno1 = {
    matricula: 1234,
    nome: "Joao",
    telefone:937102531,
    cidade: "Rio de Janeiro"
}

var aluno2 = {
    matricula: 9876,
    nome: "Pedro",
    telefone:912040241,
    cidade: "São Paulo"
}

var aluno3 = {
    matricula: 4039,
    nome: "Enzo",
    telefone:987875555,
    cidade: "Minas Gerais"
}

var alunosJuntos = [aluno1, aluno2, aluno3]

var [joao, ...outros] = alunosJuntos

console.log(joao)
console.log(outros)
