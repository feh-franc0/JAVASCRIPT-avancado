// Map - diferente do filter ele n vai trazer um novo array com os elementos do array principal snedo filtrado, ele vai traazer um novo array mas esse array vai ser totalmente novo, que pode ser criado em cima dos elementos do array principal

function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35),
]

// function nomeIdade(aluno) {
//     return aluno.nome + " tem " + aluno.idade + " anos";
// }

function alunoDaquiA5Anos(aluno) {
    return {
        nome: aluno.nome,
        idade: aluno.idade + 5
    }
}


// console.log(alunos.map(nomeIdade))
console.log(alunos.map(alunoDaquiA5Anos))
console.log(alunos)