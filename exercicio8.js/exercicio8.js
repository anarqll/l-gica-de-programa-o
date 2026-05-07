const valorPorHora = parseFloat(prompt("Quanto você ganha por hora?"));
const horasTrabalhadas = parseFloat(prompt("Quantas horas você trabalhou no mês?"));

const salario = valorPorHora * horasTrabalhadas;

document.write("Seu salário do mês é: R$ " + salario);