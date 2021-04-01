
// Promedio entre 4 numeros

var numero1
var numero2
var numero3
var numero4

let mensaje = prompt ("Calcule el promedio entre 4 numeros")

numero1 = parseInt(prompt("Ingrese el primer numero"));
numero2 = parseInt(prompt("Ingrese el segundo numero"));
numero3 = parseInt(prompt("Ingrese el tercer numero"));
numero4 = parseInt(prompt("Ingrese el cuarto numero"));

let promedio = prompt(numero1 + numero2 + numero3 + numero4) / 4;

// Calculo iva - 

var precio = numero1 + numero2 + numero3 + numero4;
var iva = precio *21/100;
var precioIva = precio+iva;

alert ("Precio con iva $" + precioIva);

// Precio con descuento

var descuento = 300;
var resta = precioIva - descuento;
 
alert ("Precio con descuento " + resta)

