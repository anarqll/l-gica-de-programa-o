const metros = parseFloat(prompt("Digite o valor em metros:")); // pode colocar Number ao invés de parseFloat, porque o number chama o parsefloat dentro dele
const centimetros = metros * 100; // e posso colocar let, mas quando é um valor que vc sabe que pode mudar, mas por padrão usa o const porque só pode receber um valor

document.write(metros + " metros = " + centimetros + " centimetros");