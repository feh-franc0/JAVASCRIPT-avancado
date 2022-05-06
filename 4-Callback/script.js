// passar funcao como argumento de outras funcoes
// callback é muito usado para esperar algo acontecer e quando aquilo acontecer a gente dar o proximo passo para concluir nosso algoritmo

// para simular a lentidar da internet quando nosso sistema estiver funcionando em um servidor, vamos por um setTimeout de 1 segundo 

let usuarios = ["Adriano", "Marcia", "José"];

function inserirUsuario(nome, callback) {

    setTimeout(() => {
        usuarios.push(nome);
        callback();
    }, 1000);

}

function listarUsuarios() {
    console.log(usuarios);
}

inserirUsuario("Igor", listarUsuarios);

//? serve para a gente esperar algo terminar para depois fazermos o nosso segundo passo para conclusao da funcao