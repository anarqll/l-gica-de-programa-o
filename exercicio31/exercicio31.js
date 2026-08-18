function diaDaSemana() {
    let dia = document.getElementById("dia").value;

    // Manda o número para a outra página, colado no endereço (URL)
    window.location.href = "resultado.html?dia=" + dia;
}
