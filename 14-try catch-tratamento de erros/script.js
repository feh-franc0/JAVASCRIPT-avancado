// TRY CATCH = tentar fazer algo, se nao conseguir ele vai tratar de alguma maneira
// serve para caso de erro em alguma coisa o nosso sistema continue fluindo normalemnte e o erro seja tratado

// try = tente  /  catch = se der erro  /  finally = vai ser executado independente de ter dado certo ou errado

// o finally nao é muito usado, o que é sempre usado é o try e o catch

let nome = "Fernando"; // o nome n pode ser vazio, caso seja sera tratado dentro do try

try {
    if(nome == "") {
        throw "O nome não pode ser vazio";
    }
    console.log("seja bem vindo: "+nome);
} catch (err) {
    console.log("Houve um erro", err)
} finally {
    console.log("Boa Noite")
}