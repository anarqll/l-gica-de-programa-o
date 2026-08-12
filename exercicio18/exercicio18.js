let tamanho = parseFloat(prompt("Informe o tamanho do arquivo em MB:"));
let velocidade = parseFloat(prompt("Informe a velocidade do link em Mbps:"));

// Converte MB para Mbits (1 byte = 8 bits)
let tamanhoMbits = tamanho * 8

// Divide os megabits pela velocidade = tempo em segundos
let segundos = tamanhoMbits / velocidade

// Divide os segundos por 60 = tempo em minutos
let minutos = segundos / 60

// Exibe o resultado
document.write("Tempo estimado para download: " + minutos.toFixed(2) + " minutos");