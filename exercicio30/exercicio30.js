function calcularFolha() {

    let valorHora = parseFloat(document.getElementById('valorHora').value)
    let horas = parseFloat(document.getElementById('horas').value)

    let salarioBruto = valorHora * horas

    let percentualIR

    if (salarioBruto <= 900) {
        percentualIR = 0
    } else if (salarioBruto <= 1500) {
        percentualIR = 5
    } else if (salarioBruto <= 2500) {
        percentualIR = 10
    } else {
        percentualIR = 20
    }

    let ir = salarioBruto * percentualIR / 100
    let inss = salarioBruto * 10 / 100
    let fgts = salarioBruto * 11 / 100

    let totalDescontos = ir + inss

    let salarioLiquido = salarioBruto - totalDescontos

    let resultado = document.getElementById('resultado')

    let formato = { minimumFractionDigits: 2 }

    resultado.innerHTML =
        "Salário Bruto (" + valorHora + " x " + horas + "): R$ " + salarioBruto.toLocaleString('pt-BR', formato) + "<br>" +
        "(-) IR (" + percentualIR + "%): R$ " + ir.toLocaleString('pt-BR', formato) + "<br>" +
        "(-) INSS (10%): R$ " + inss.toLocaleString('pt-BR', formato) + "<br>" +
        "FGTS (11%): R$ " + fgts.toLocaleString('pt-BR', formato) + "<br>" +
        "Total de descontos: R$ " + totalDescontos.toLocaleString('pt-BR', formato) + "<br>" +
        "Salário Líquido: R$ " + salarioLiquido.toLocaleString('pt-BR', formato)

    resultado.style.display = 'block'
}
