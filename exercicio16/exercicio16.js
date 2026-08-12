let área = parseFloat(prompt("Informe o tamanho em metros quadrados da área a ser pintada:"));
if (isNaN(área)) { // se o usuário inserir por extenso. NaN significa not a number 
    document.write("Valor inválido. Por favor, insira um número válido para a área.");
}
else {
    let litros = área / 3;
    let latas = Math.ceil(litros / 18);
    let custo = latas * 80;

    if (latas === 1) {
        document.write('Será necessária ' + latas + ' lata de tinta para pintar a área de ' + área + ' m<sup>2</sup>, com um custo total de R$ ' + custo + '.');
    }
    else {
        document.write('Serão necessárias ' + latas + ' latas de tinta para pintar a área de ' + área + ' m<sup>2</sup>, com um custo total de R$ ' + custo + '.');
    }
}


