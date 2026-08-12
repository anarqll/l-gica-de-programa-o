let nota1 = parseFloat(prompt("Digite a 1ª nota bimestral:")); // posso usar const também, já que recebe só um valor
let nota2 = parseFloat(prompt("Digite a 2ª nota bimestral:"));
let nota3 = parseFloat(prompt("Digite a 3ª nota bimestral:"));
let nota4 = parseFloat(prompt("Digite a 4ª nota bimestral:"));

const média = (nota1 + nota2 + nota3 + nota4) / 4;

document.write("A média bimestral: "+ média);