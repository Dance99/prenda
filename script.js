{//parseFloat es un método en Java que se utiliza para convertir una cadena de texto que representa un número decimal//
//Usuario solicita precio de prenda//
let precio = parseFloat(prompt("Ingresa el precio de la prenda de vestir"))
//solicita el porcentaje del descuento//
let descuento = parseFloat(prompt("ingresa el procentaje de descuento"))

//calcular descuento//
let cantdescuento = (precio*descuento)/100;
let preciofinal = precio-cantdescuento;

//toFixed(2), el número se redondea al segundo decimal. Si el tercer decimal es 5 o más, el segundo decimal se redondea hacia arriba//
//mostrar resultado//
document.write("le precio original es: $" + precio.toFixed(2) + "<br>");
document.write("El porcentaje de descuento es:" + descuento + "%<br>" )
document.write("el precio final despues del descuento es: $" + preciofinal.toFixed(2))
}