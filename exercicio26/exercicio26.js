function calcular() {
    // .replace() precisa ser chamado na string (resultado do prompt/value), ANTES do parseFloat
    let preco1 = parseFloat(document.getElementById('preco1').value.replace(',', '.'))
    let preco2 = parseFloat(document.getElementById('preco2').value.replace(',', '.'))
    let preco3 = parseFloat(document.getElementById('preco3').value.replace(',', '.'))

    if (isNaN(preco1) || isNaN(preco2) || isNaN(preco3)) {
        alert('Informe os preços dos 3 produtos!')
        return
    }

    let menor, maior

    if (preco1 <= preco2 && preco1 <= preco3) {
        menor = preco1
    } else if (preco2 <= preco1 && preco2 <= preco3) {
        menor = preco2
    } else {
        menor = preco3
    }

    if (preco1 >= preco2 && preco1 >= preco3) {
        maior = preco1
    } else if (preco2 >= preco1 && preco2 >= preco3) {
        maior = preco2
    } else {
        maior = preco3
    }

    const resultado = document.getElementById('resultado')
    resultado.innerHTML =
        '✅ Compre o produto de <strong>R$ ' + menor.toFixed(2) + '</strong> — é o mais barato!<br>' +
        '❌ Evite o produto de <strong>R$ ' + maior.toFixed(2) + '</strong> — é o mais caro.'
    resultado.style.display = 'block'
}
