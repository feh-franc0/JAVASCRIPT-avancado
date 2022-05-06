// Fetch da super poderes ao nosso codigo, ate agora so trabalhamos com dados estaticos, agora vamos pegar dados dinamicos de outro site, de outros lugares nao sendo so o nosso
// Dados dinamicos sao dados que mudam e estao armazenados em outro lugar, para isos vamos usar uma API

let url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL";




function converter(){
    let input = document.getElementById("valor");
    let valor = input.value;


    // o fetch vai retornar uma promise
    fetch(url)
    .then((res) => {

        return res.json()

    })
    .then((data) => {
        console.log(data)
        let rate = data.USDBRL.bid;
        
        let resultado = `${valor} dolares = ${rate * valor} em reais`
        document.getElementById("resultado").innerHTML = resultado;

    })


}







