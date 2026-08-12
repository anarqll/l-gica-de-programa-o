function calcularReajuste() {
    let salario = parseFloat(document.getElementById("salario").value);
    let resultado = document.getElementById("resultado");

    if (salario <= 280) {
        let reajuste = salario * 0.2;
        let novoSalario = salario + reajuste;
        resultado.innerHTML = 'Salário antes do reajuste: R$ ' + salario.toFixed(2) + '<br>' +
            'Percentual de aumento aplicado: 20%' + '<br>' +
            'Valor do aumento: R$ ' + reajuste.toFixed(2) + '<br>' +
            'Novo salário, após o aumento: R$ ' + novoSalario.toFixed(2) + '<br>';

    } else if (salario > 280 && salario <= 700) {
        let reajuste = salario * 0.15;
        let novoSalario = salario + reajuste;
        resultado.innerHTML = 'Salário antes do reajuste: R$ ' + salario.toFixed(2) + '<br>' +
            'Percentual de aumento aplicado: 15%' + '<br>' +
            'Valor do aumento: R$ ' + reajuste.toFixed(2) + '<br>' +
            'Novo salário, após o aumento: R$ ' + novoSalario.toFixed(2) + '<br>';

    } else if (salario > 700 && salario <= 1500) {
        let reajuste = salario * 0.1;
        let novoSalario = salario + reajuste;
        resultado.innerHTML = 'Salário antes do reajuste: R$ ' + salario.toFixed(2) + '<br>' +
            'Percentual de aumento aplicado: 10%' + '<br>' +
            'Valor do aumento: R$ ' + reajuste.toFixed(2) + '<br>' +
            'Novo salário, após o aumento: R$ ' + novoSalario.toFixed(2) + '<br>';

    } else {
        let reajuste = salario * 0.05;
        let novoSalario = salario + reajuste;
        resultado.innerHTML = 'Salário antes do reajuste: R$ ' + salario.toFixed(2) + '<br>' +
            'Percentual de aumento aplicado: 5%' + '<br>' +
            'Valor do aumento: R$ ' + reajuste.toFixed(2) + '<br>' +
            'Novo salário, após o aumento: R$ ' + novoSalario.toFixed(2) + '<br>';
    }

    resultado.style.display = 'block'
}

