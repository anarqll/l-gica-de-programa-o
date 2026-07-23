function calcular () {

let num1 = parseFloat(document.getElementById('num1').value)

let num2 = parseFloat(document.getElementById('num2').value)

let num3 = parseFloat(document.getElementById('num3').value)

let maior, médio, menor

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

médio = (num1 + num2 + num3) - maior - menor

let resultado = document.getElementById('resultado')
resultado.innerHTML = "A ordem decrescente é " + maior + ", " + médio + ", " + menor + "."
resultado.style.display = 'block'
}