let peso = parseFloat(prompt("Digite o peso de peixes capturados (em kg):"));

let excesso = 0; // declarando a variável
let multa = 0;

if (peso > 50) {
    excesso = peso - 50
    multa = excesso * 4
}

document.write("Peso capturado: "+ peso + "kg<br>")
document.write("Excesso: "+ excesso + "kg<br>")
document.write("Multa: R$ "+ multa.toFixed(2));