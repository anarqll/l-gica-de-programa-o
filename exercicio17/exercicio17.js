function calcular() {
    let area = parseFloat(document.getElementById('area').value)

    if (isNaN(area) || area <= 0) {
        alert('Informe uma área válida!')
        return
    }

    let litros = (area / 6) * 1.10

    // Situação 1: só latas
    let latasSit1 = Math.ceil(litros / 18)
    let precoSit1 = latasSit1 * 80

    // Situação 2: só galões
    let galoesSit2 = Math.ceil(litros / 3.6)
    let precoSit2 = galoesSit2 * 25

    // Situação 3: mistura com menor preço
    let latasMix = Math.floor(litros / 18)
    let restoLitros = litros - (latasMix * 18)
    let galoesMix = Math.ceil(restoLitros / 3.6)

    if (galoesMix * 25 > 80) {
        latasMix = latasMix + 1
        galoesMix = 0
    }

    let precoSit3 = (latasMix * 80) + (galoesMix * 25)

    document.getElementById('val1').innerHTML =
        latasSit1 + ' lata(s) de 18L<br><strong>R$ ' + precoSit1 + ',00</strong>'

    document.getElementById('val2').innerHTML =
        galoesSit2 + ' galão(ões) de 3,6L<br><strong>R$ ' + precoSit2 + ',00</strong>'

    document.getElementById('val3').innerHTML =
        latasMix + ' lata(s) de 18L + ' + galoesMix + ' galão(ões) de 3,6L<br><strong>R$ ' + precoSit3 + ',00</strong>'

    document.getElementById('resultados').classList.add('visivel')
}
