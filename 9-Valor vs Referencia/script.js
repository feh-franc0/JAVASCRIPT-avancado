// REFERENCIA = objetos e arrays

// VALOR = numeros primitivos


//? quando a gente coloca um objeto dentro do outro ele vai como referencia. Ou seja tudo o que vc modifica em alunoB vai ser alterado em alunoA é como se ele ganhasse um novo apelido e vc chamasse o novo apelido mudando os dois 
let alunoA = { nome: "Igor", idade: "15" };

let alunoB = alunoA;

alunoB.idade = 25;

console.log(alunoA)
console.log(alunoB)


//? Arrays tmb seram referencia
let turmaA = ["Igor", "Jose", "Paula"];

let turmaB = turmaA;

turmaB.push("Joao");

console.log(turmaA)
console.log(turmaB)



// É diferente de quando vc trabalha com numeros primitivos, string ou numeros, ai vc pode fazer referencia e nao ira modificar o valor da variavel que vc copiou.Ai vira uma atribuicao por Valoe, o idadeB pegou apenas o Valor da idadeA e modificamos o idadeB que antes continha a o valor de igual ao de idadeA e agora recebeu 10, idadeA = 15 e idadeB = 10
let idadeA = 15;

let idadeB = idadeA;

idadeB = 10;

console.log(idadeA)
console.log(idadeB)




//* se n tem como fazer atribuicao de valor com OBJETOS nem com ARRAYS como a gente pode fazer uma copia sem ele ser uma referencia, ele ser uma copia mesmo, um clone.
// ARRAY
let alunosClasse = ["Jony","Fabricio","Giovana"];

let novosAlunos = [...alunosClasse];

novosAlunos.push("Joao");
console.log(alunosClasse)
console.log(novosAlunos)


// OBJETO
let student = { nome:"Igor",idade:15, class:"mat" };

let NewClassStudent = {...alunoA}

NewClassStudent.class = "Port"

console.log(student)
console.log(NewClassStudent)



//? RELEMBRANDO:
//* Atribuição por valor,faz uma cópia do elemento original,e qualquer alteração na cópia não vai refletir no original.
//* Atribuição por referência,não faz cópia, é como se desse um novo apelido para o objeto original. Qualquer modificação no novo elemento altera também o original.