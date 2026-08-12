let num = parseFloat(prompt("Informe um valor:"));

if (num > 0) {
    document.write("O valor " + num + " é positivo.");
} else if (num < 0) {
    document.write("O valor " + num + " é negativo.");
} else {
    document.write("O valor é zero.")
}