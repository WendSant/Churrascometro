// Regras do aplicativo
//  Carne - 400gr por pessoa + de 6horas - 650
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml
// Crianças valem por 0,5

// Pegando os elementos
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

// Funções
function carne(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cerveja(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidas(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}

function calcular() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  if (adultos <= 0) {
    alert("Digite quantos adultos");
  } else if (criancas <= 0) {
    alert("Digite quantas crianças");
  } else if (duracao <= 0) {
    alert("Digite a duração do churrasco");
  } else {
    let qdtTotalCarne =
      carne(duracao) * adultos + (carne(duracao) / 2) * criancas;
    let qdtTotalCerveja = cerveja(duracao) * adultos;
    let qdtTotalBebidas =
      bebidas(duracao) * adultos + (bebidas(duracao) / 2) * criancas;

    if (qdtTotalCarne < 1000) {
      resultado.innerHTML = `
    <div class="result-block">
      <img src="./assets/steak2.svg"/>
      <p>${qdtTotalCarne} gramas de carne</p>
    </div>
  `;
    } else {
      resultado.innerHTML = `
    <div class="result-block">
      <img src="./assets/steak2.svg"/>
      <p>${qdtTotalCarne / 1000} Kg de carne</p>
    </div>
  `;
    }

    resultado.innerHTML += `
    <div class="result-block">
      <img src="./assets/beer.svg"/>
      <p>${Math.ceil(qdtTotalCerveja / 355)} latinhas de cerveja</p>
    </div>
  `;
    resultado.innerHTML += `
    <div class="result-block">
      <img class="blackdrink" src="./assets/drinks.png"/>
      <p>${Math.ceil(
        qdtTotalBebidas / 2000
      )} garrafas de refrigerante ou soda</p>
    </div>
    </br>
   
  `;
  }
}
