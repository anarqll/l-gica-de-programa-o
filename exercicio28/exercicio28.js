function verificarTurno() {

    let turno = document.getElementById('turno').value.toUpperCase()

    let resultado = document.getElementById('resultado')

    if (turno === "M") {
        resultado.innerHTML = "Bom dia!"
    } else if (turno === "V") {
        resultado.innerHTML = "Boa tarde!"
    } else if (turno === "N") {
        resultado.innerHTML = "Boa noite!"
    } else {
        resultado.innerHTML = "Turno inválido! Digite M, V ou N."
    }

    resultado.style.display = 'block'
}
