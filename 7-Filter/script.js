// toda array tem uma funcao chamada filter essa funcao filter receber um callback e ela vai pegar e passar todos os seus elementos para aquele callback, sempre que tiver uma resposta verdadeira ele vai criar um novo array para por os elementos verdadeiros e o que nao corresporem levam falso e nao entram no novo array gerado

//TODO: criando uma funcao filtro que pode ser usado em qualquer array

function novoAluno(nome,idade){
    return {nome,idade}
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35)
]

let jogadores = [
    novoAluno("Igor", 23),
    novoAluno("Leo", 45),
    novoAluno("Michelle", 29),
    novoAluno("Maria", 35)
]

function temMenosde30(aluno) {
    return aluno.idade < 30
}
function temMaisde30(aluno) {
    return aluno.idade > 30
}

//! NAO PRECISAMOS DISSO
// function filtro(callback) {

//     let alunosFiltrados = []
//     for(let aluno of this) {
//         if (callback(aluno)) {
//             alunosFiltrados.push(aluno)
//         }
//     }
//     return alunosFiltrados;
// }

// alunos.filtro = filtro;
// jogadores.filtro = filtro

// console.log(alunos.filtro(temMaisde30))
// console.log(jogadores.filtro(temMaisde30))

//? PORQUE TEMOS O FILTER
console.log(alunos.filter(temMenosde30))
console.log(jogadores.filter(temMaisde30))