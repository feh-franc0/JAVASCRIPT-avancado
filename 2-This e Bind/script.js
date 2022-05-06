// Bind da um contexto para uma funcao e This faz referencia aquilo que foi passado e depende do contexto
// toda funcao no js tem um metodo que se chama bind
// bind da um contexto padrao

function speakGeneric(){
    console.log(this.sound);
}

let dog = {
    sound: "AU AU",
    speak: speakGeneric
}

let cat = {
    sound: "MIAU",
    speak: speakGeneric
}

dog.speak(); // AU AU
cat.speak(); // MIAU

let bindedFunction = speakGeneric.bind(dog); // AU AU, por padrao vai ser o som do dog

bindedFunction();