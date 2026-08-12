let valorHora=parseFloat(prompt("Digite o valor da sua hora de trabalho:"));
let horasTrabalhadas=parseFloat(prompt("Digite a quantidade de horas trabalhadas no mês:"));

document.write("Seu salário bruto é: R$" + (valorHora * horasTrabalhadas).toLocaleString('pt-BR', {minimumFractionDigits: 2})+ "<br>");

let descontoIR = (valorHora * horasTrabalhadas) * 0.11;
let descontoINSS = (valorHora * horasTrabalhadas) * 0.08;
let descontoSindicato = (valorHora * horasTrabalhadas) * 0.05;

let salarioliquido = (valorHora * horasTrabalhadas) - descontoIR - descontoINSS - descontoSindicato;

document.write("Desconto do IR: R$"+ descontoIR.toLocaleString('pt-BR', {minimumFractionDigits: 2})+ "<br>");
document.write("Desconto do INSS: R$"+ descontoINSS.toLocaleString('pt-BR', {minimumFractionDigits: 2})+ "<br>");
document.write("Desconto do Sindicato: R$"+ descontoSindicato.toLocaleString('pt-BR', {minimumFractionDigits: 2})+ "<br>");
document.write("Salário líquido: R$"+ salarioliquido.toLocaleString('pt-BR', {minimumFractionDigits: 2})+ "<br>");
