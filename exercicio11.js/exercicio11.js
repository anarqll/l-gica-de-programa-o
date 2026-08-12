const num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
const num2 = parseInt(prompt("Digite o segundo número inteiro:"));
const num3 = parseFloat(prompt("Digite o terceiro número real:"));

const produto = (num1 * 2) * (num2 / 2);
const soma = (num1 * 3) + num3;
const cubo = num3 ** 3;

document.write("Produto do dobro do primeiro com metade do segundo: " + produto);
document.write("<br> Soma do triplo do primeiro com o terceiro: "+ soma);
document.write("<br> O terceiro número elevado ao cubo: " + cubo);
