let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let qtdTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);
    
    
    resultado.innerHTML = `<p>${qtdTotalCarne/1000}kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} latas de Cervejas</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/2000)} Pet's 2l de Bebidas</p>`
}

function carnePorPessoa(duracao) {
    if (duracao >= 6) {
        return 650;
    }
    else {
        return 400;
    }
}

function cervejaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 2000;
    }
    else {
        return 1200
    }

}


function bebidasPorPessoa(duracao) {
    if (duracao >= 6) {
        return 1500;
    }
    else {
        return 1000
    }

}