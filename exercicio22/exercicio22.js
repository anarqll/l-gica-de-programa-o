let letra = prompt("Digite uma letra");
letra = letra.toLowerCase(); // transformo a letra maiuscula em minuscula

if (letra==="a" || letra==="e" || letra==="i" || letra==="o" || letra==="u") {
document.write("A letra \"" + letra + "\" é uma vogal.")
}

else {
document.write("A letra \"" + letra + "\" é uma consoante.")
}
// a \ invertida nesse caso é usada para indicar "essas aspas", entao usa-se \"" e finaliza com \""

