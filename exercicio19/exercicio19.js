let num1 = parseFloat(prompt("Informe o primeiro número:"));
let num2 = parseFloat(prompt("Informe o segundo número:"));

if (num1 > num2) {
    document.write("O maior número é: " + num1)
} else if (num2 > num1) {
    document.write("O maior número é: "+ num2)
} else {
    document.write("Os números são iguais.")
}