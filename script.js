const enviar = document.querySelector('.enviar');

function calcularImc(event){
  event.preventDefault();

  const peso = document.querySelector('.peso');
  const altura = document.querySelector('.altura');
  const resultado = document.querySelector('.resultado');

  const formula = peso.value / altura.value ** 2;
  resultado.value = formula.toFixed(2);
}

enviar.addEventListener('click', calcularImc);

//calculadora de Bhaskara//

const enviarBhaskara = document.querySelector('.enviar-bhaskara');

function calcularBhaskara(event){
  event.preventDefault();

  const a = document.querySelector('.valorA');
  const b = document.querySelector('.valorB');
  const c = document.querySelector('.valorC');
  const resultadoBhaskara = document.querySelector('.resultado-bhaskara');
  const paragrafoDelta = document.querySelector('.valorDelta');
  const deltaZero = document.querySelector('.deltaZero');

  const calcularDelta = b.value ** 2 - (4 * (a.value * c.value));
  Number(calcularDelta);
  paragrafoDelta.innerText = calcularDelta;

  if(calcularDelta < 0){
    paragrafoDelta.innerText = 'Delta é menor que zero, portanto, a equação não possui raizes reais';
  }else if(calcularDelta === 0){
    deltaZero.innerText = 'O valor de delta mostra o número de soluções da equação, sem ter a necessidade de calcular os valores dessas raízes. Como Δ = 0, a equação possui uma única solução real.'
  };



  const paragrafoX = document.querySelector('.valorX1Linha');
  const paragrafoX2 = document.querySelector('.valorX2Linha');
  
  const x1Linha = (-b.value) + Number(Math.sqrt(calcularDelta)) / (2 * a.value);
  parseInt(x1Linha);
  paragrafoX.innerText = x1Linha;
  
  const x2Linha = (-b.value) - Number(Math.sqrt(calcularDelta)) / (2 * a.value);
  parseInt(x2Linha);
  paragrafoX2.innerText = x2Linha;


}

enviarBhaskara.addEventListener('click', calcularBhaskara);