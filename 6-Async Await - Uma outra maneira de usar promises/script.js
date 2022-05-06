// Async Await é para vc transformar um codigo assincrono em sincrono
// await vai esperar algo terminar para permetir o nosso codigo ir para o proximo passo 


let usuarios = ["Adriano", "Marcia", "José"]

function inserirUsuario(nome) {

    let promise = new Promise(function (resolve, reject){
        setTimeout(() => {
            usuarios.push(nome);
            let error = false;

            if (!error) {
                resolve();
            } else {
                reject({ msg: "Erro de qualquer coisa" })
            }
        }, 1000);
    })
    return promise;
}

function listarUsuarios() {
    console.log(usuarios);
}


async function executar() {

    await inserirUsuario("Fernando");
    listarUsuarios();

}

executar();