const altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.60):"));

const pesoIdeal = (72.7 * altura) - 58;

document.write("Sua altura: " + altura + "m");
document.write("<br> Seu peso ideal é: " + pesoIdeal.toFixed(2) + "kg");
