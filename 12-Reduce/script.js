// REDUCE = reduce tmb é um metodo para nossos arrays

// vai pegar todo o nosso array e vai transformar em uma unica variavel(em um unico resultado)

// Nesse exemplo vamos somar a idade de todos os alunos

// para isso precisamos de dois argumentos(total, elemento)

function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35),
]

function idadeDaTurma(total, aluno) {
    return total + aluno.idade
}

// reduce(funcao, totalAntesDoInicio)
console.log(alunos.reduce(idadeDaTurma, 0));




//* USANDO COM STRING
function nomeDaTurma(nomezao, aluno) {
    return nomezao + aluno.nome + ", ";
}

console.log(alunos.reduce(nomeDaTurma, "Nome dos alunos: "))



//todo: importante voce saber que o reduce ele vai reduzir todas as entradas de um array em uma unica entrada,e essa entrada pode ser um monte de coisas. O que vai depender é o que a sua funcao faz

