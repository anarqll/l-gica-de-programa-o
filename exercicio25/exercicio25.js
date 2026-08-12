function calcular() {
    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat(document.getElementById('num2').value)
    let num3 = parseFloat(document.getElementById('num3').value)

    let menor, maior

    if (num1 >= num2 && num1 >= num3) {
        maior = num1
    } else if (num2 >= num1 && num2 >= num3) {
        maior = num2
    } else {
        maior = num3
    }

    if (num1 <= num2 && num1 <= num3) {
        menor = num1
    } else if (num2 <= num1 && num2 <= num3) {
        menor = num2
    } else {
        menor = num3
    }

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = "O maior número é <strong>" + maior + "</strong><br>O menor número é <strong>" + menor + "</strong>"
    resultado.style.display = 'block' // a palavra 'block' significa uma caixa ou bloco usado para exibir uma largura inteira e é usada para exibir o resultado, caso ele esteja oculto
}
