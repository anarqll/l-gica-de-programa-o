function calcular () {

let num1 = parseFloat(document.getElementById('num1').value)

let num2 = parseFloat(document.getElementById('num2').value)

let num3 = parseFloat(document.getElementById('num3').value)

let [maior,médio,menor]=[num1, num2, num3].sort((a,b) => b-a)
/* let maior, médio, menor

if (num1 <= num3 && num1 >= num2) {
médio = num1
maior = num3
menor = num2
} else if (num2 <= num3 && num2 >= num1) {
médio = num2
maior = num3
menor = num1
} else if (num3 <= num2 && num3 >= num1){
médio = num3
menor = num1
maior = num2
} else if (num1 >= num3 && num1 <= num2) {
médio = num3
maior = num1
menor = num2
}

/* if (num1 >= num2 && num1 >= num3) {
maior = num1
} else if (num2 >= num1 && num2 >= num3) {
maior = num2
} else {
maior = num3
}

if (num1 <= num3 && num1 >= num2) {
médio = num1
} else if (num2 <= num3 && num2 >= num1) {
médio = num2
} else {
médio = num3
}

if (num1 <= num2 && num1 <= num3) {
menor = num1
} else if (num2 <= num1 && num2 <= num3) {
menor = num2
} else {
menor = num3
}

OUTRA FORMA DE FAZER 
/* if (num1 >= num2 && num1 >= num3) {
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

médio = (num1 + num2 + num3) - maior - menor */ 

let resultado = document.getElementById('resultado')
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    resultado.innerHTML = "Por favor, insira os números solicitados."
    resultado.style.display = 'block'
    return
}
resultado.innerHTML = "A ordem decrescente é " + maior + ", " + médio + ", " + menor + "."
resultado.style.display = 'block'
}