let num1 = parseFloat(prompt("Informe o número 1"));
let num2 = parseFloat(prompt("Informe o número 2"));
let num3 = parseFloat(prompt("Informe o número 3"));

if (num1 >= num2 && num1 >= num3) {
    document.write("O maior número é " + num1); // coloca-se maior ou igual pq pode ser que os números sejam iguais e pode dar bug
}

else if (num2 >= num1 && num2 >= num3) {
    document.write("O maior número é " + num2); 
}

else {
    document.write("O maior número é " + num3);
}
