{//parseFloat es un método en Java que se utiliza para convertir una cadena de texto que representa un número decimal//
//Usuario solicita precio de prenda//
let precio = parseFloat(prompt("Ingresa el precio de la prenda de vestir"))
//solicita el porcentaje del descuento//
let descuento = parseFloat(prompt("ingresa el procentaje de descuento"))

//calcular descuento//
let cantdescuento = (precio*descuento)/100;
let preciofinal = precio-cantdescuento;