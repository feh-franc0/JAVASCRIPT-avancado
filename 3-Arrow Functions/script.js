// funcao de seta é é commo vc usar uma funcao anonima e atribuir em uma variavel mudando a sintaxe


//* funcao anonima atribuida a uma var e dps sendo chammada a var executando a funcao
let dobro1 = function (x) {
    console.log(2 * x);
}

dobro1(15);


//* funcao de seta
 let dobro2 = (x) => {
     console.log(2 * x);
 }

dobro2(7);


//* funcao de seta que precisa apenas de um parammetro pode n ter as '()'
let dobro3 = x => {
    return (2 * x);
}

console.log(dobro3(8));


//* quando a funcao de seta returna e tem apenas uma linha n precisar usar o return e se quiser nem as '()' no funcao
let dobro4 = x => 2 * x;

console.log(dobro4(9))


//* diferença entre a forma normal e a forma de seta simplificada retornando e tenho apenas uma unica linha na funcao
let dobroTeste1 = x => 2 * x;

let dobroTeste2 = function (x){
    return 2 * x;
}

console.log(dobroTeste1(3));
console.log(dobroTeste2(3));


//* uma arrow function n entende o que é o this e nem o bind, entao quando for usar o this ou o bind use a funcao da forma normal


//* funcao para ser usada com o this refenrente a um objeto
let dobrou = function () {
    console.log(this.x * 2)
}

let numero = {
    x: 8,
    d: dobrou
}

numero.d(); // 16