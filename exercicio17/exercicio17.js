const idiomas = {
    pt: {
        tema: 'verde',
        titulo: 'Calculadora de Tinta',
        subtitulo: 'Descubra a quantidade certa de tinta para pintar seu espaço',
        lata18: 'Lata 18L',
        galao36: 'Galão 3,6L',
        coberturaLabel: 'Cobertura',
        areaLabel: 'Área a ser pintada',
        placeholder: 'Ex: 45',
        obs: '* Inclui 10% de margem de segurança',
        calcular: 'Calcular',
        sit1titulo: 'Só Latas',
        sit1sub: 'Latas de 18 litros',
        sit2titulo: 'Só Galões',
        sit2sub: 'Galões de 3,6 litros',
        sit3titulo: 'Mistura',
        sit3sub: 'Latas + Galões',
        menorPreco: 'Menor preço',
        lata: 'lata(s)',
        galao: 'galão(ões)',
        total: 'Total',
        alerta: 'Informe uma área válida!'
    },
    es: {
        tema: 'vermelho',
        titulo: 'Calculadora de Pintura',
        subtitulo: 'Descubra la cantidad correcta de pintura para su espacio',
        lata18: 'Lata 18L',
        galao36: 'Galón 3,6L',
        coberturaLabel: 'Cobertura',
        areaLabel: 'Área a pintar',
        placeholder: 'Ej: 45',
        obs: '* Incluye 10% de margen de seguridad',
        calcular: 'Calcular',
        sit1titulo: 'Solo Latas',
        sit1sub: 'Latas de 18 litros',
        sit2titulo: 'Solo Galones',
        sit2sub: 'Galones de 3,6 litros',
        sit3titulo: 'Mezcla',
        sit3sub: 'Latas + Galones',
        menorPreco: 'Menor precio',
        lata: 'lata(s)',
        galao: 'galón(es)',
        total: 'Total',
        alerta: '¡Ingrese un área válida!'
    },
    en: {
        tema: 'amarelo',
        titulo: 'Paint Calculator',
        subtitulo: 'Find out the right amount of paint for your space',
        lata18: 'Can 18L',
        galao36: 'Gallon 3.6L',
        coberturaLabel: 'Coverage',
        areaLabel: 'Area to be painted',
        placeholder: 'E.g.: 45',
        obs: '* Includes 10% safety margin',
        calcular: 'Calculate',
        sit1titulo: 'Cans Only',
        sit1sub: '18-liter cans',
        sit2titulo: 'Gallons Only',
        sit2sub: '3.6-liter gallons',
        sit3titulo: 'Mix',
        sit3sub: 'Cans + Gallons',
        menorPreco: 'Best price',
        lata: 'can(s)',
        galao: 'gallon(s)',
        total: 'Total',
        alerta: 'Please enter a valid area!'
    }
}

let idiomaAtual = 'pt'
const ordemIdiomas = ['pt', 'es', 'en']
let idiomaIndex = 0

function mudarIdioma(idioma) {
    idiomaAtual = idioma
    idiomaIndex = ordemIdiomas.indexOf(idioma)
    const t = idiomas[idioma]

    document.body.className = 'tema-' + t.tema

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const chave = el.getAttribute('data-i18n')
        if (t[chave]) el.textContent = t[chave]
    })

    document.getElementById('area').placeholder = t.placeholder

    if (document.getElementById('resultados').classList.contains('visivel')) calcular()
}

// Ao clicar na foto do pintor, troca o idioma
document.getElementById('pintor-foto').addEventListener('click', () => {
    idiomaIndex = (idiomaIndex + 1) % ordemIdiomas.length
    mudarIdioma(ordemIdiomas[idiomaIndex])
})

function calcular() {
    const area = parseFloat(document.getElementById('area').value)
    const t = idiomas[idiomaAtual]

    if (isNaN(area) || area <= 0) {
        alert(t.alerta)
        return
    }

    const litros = (area / 6) * 1.10

    const latasSit1 = Math.ceil(litros / 18)
    const precoSit1 = latasSit1 * 80

    const galoesSit2 = Math.ceil(litros / 3.6)
    const precoSit2 = galoesSit2 * 25

    let latasMix = Math.floor(litros / 18)
    const restoLitros = litros - (latasMix * 18)
    let galoesMix = Math.ceil(restoLitros / 3.6)

    if (galoesMix * 25 > 80) {
        latasMix = latasMix + 1
        galoesMix = 0
    }

    const precoSit3 = (latasMix * 80) + (galoesMix * 25)

    document.getElementById('val1').innerHTML =
        '🪣 ' + latasSit1 + ' ' + t.lata + ' &nbsp;|&nbsp; <strong>R$ ' + precoSit1 + ',00</strong>'

    document.getElementById('val2').innerHTML =
        '🫙 ' + galoesSit2 + ' ' + t.galao + ' &nbsp;|&nbsp; <strong>R$ ' + precoSit2 + ',00</strong>'

    document.getElementById('val3').innerHTML =
        '🪣 ' + latasMix + ' ' + t.lata + '<br>' +
        '🫙 ' + galoesMix + ' ' + t.galao + '<br>' +
        '<strong>' + t.total + ': R$ ' + precoSit3 + ',00</strong>'

    document.getElementById('resultados').classList.add('visivel')
}

// 47.5 30.9