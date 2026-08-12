let nota1 = parseFloat(prompt("Informe sua nota 1"));
let nota2 = parseFloat(prompt("Informe sua nota 2"));

let mediaNota = (nota1 + nota2) / 2;

if (mediaNota >= 7 && mediaNota < 10) {
    document.write("Você teve a média \""+ mediaNota+"\" e foi aprovado.");
}

else if (mediaNota < 7) {
    document.write("Você teve a média \""+ mediaNota+"\" e foi reprovado.");
}

else if (mediaNota === 10) {
    document.write("Você teve a média \""+ mediaNota+"\" e foi aprovado com distinção. Parabéns! continue assim! :) ");
}

