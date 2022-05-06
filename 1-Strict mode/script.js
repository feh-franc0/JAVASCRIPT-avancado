"use strict"

// obriga que vc declare uma var
// se vc atribuir a x = 7 dentro da funcao ele vai procurar se ja existe o 'x' fora da funcao se n tiver ele vai criar, para isso nao acontecer use o strict mode no topo do codigo
// se vc n utilizar o var ele automaticamente vai declarar pra gente, mas isso n é uma boa pratica
// se vc declarar uma funcao dentro de uma funcao ela vai ser de escopo local, so ira existir dentro da funcao, mas se vc por apenas x = "bla" ele vai procurar no global e se n tiver ele vai criar global, isso n é uma boa forma de usar

function imprimir() {

    x = 3;
    console.log(x)

}

imprimir();
console.log(x)
console.log(window)