let letra = prompt("Escreva 'F' para Feminino, 'M' para masculino e 'T' para Transgênero:");
letra = letra.toUpperCase()

if (letra === "F") {
    document.write("Feminino")
}

else if (letra === "M") {
    document.write("Masculino")
}

else if (letra==="T") {
    document.write("Transgênero")
}

else {

    document.write("Sexo Inválido")

}