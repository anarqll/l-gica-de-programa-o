const altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.60):"));
const sexo = prompt("Digite seu sexo(M para masculino, F para feminino):").toUpperCase();

let pesoIdeal;

if (sexo === "M") {
    pesoIdeal = (72.7 * altura) - 58;

} else {
    pesoIdeal = (62.1 * altura) - 44.7;
}

document.write("Peso ideal: "+ pesoIdeal.toFixed(2) + "kg");
