// Lê o número que veio no endereço da página (resultado.html?dia=3)
let endereco = new URLSearchParams(window.location.search);
let dia = parseInt(endereco.get("dia"));

let resultado = document.getElementById("resultado");
let texto = "";
let erro = false;

switch (dia) {
    case 1:
        texto = "Domingo";
        break;
    case 2:
        texto = "Segunda-feira";
        break;
    case 3:
        texto = "Terça-feira";
        break;
    case 4:
        texto = "Quarta-feira";
        break;
    case 5:
        texto = "Quinta-feira";
        break;
    case 6:
        texto = "Sexta-feira";
        break;
    case 7:
        texto = "Sábado";
        break;
    default:
        texto = "Número inválido! Digite de 1 a 7.";
        erro = true;
        break;
}

resultado.textContent = texto;
resultado.className = "balao mostrar";

if (erro === true) {
    resultado.className = "balao mostrar erro";
}
