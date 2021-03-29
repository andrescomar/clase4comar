function saludar(params) {
    console.log("Hola Andrés")   
}

saludar ();

function caluladora(pNumero1, pNumero2, pOperation) {
    let resultado = 0;
    switch (pOperation) {
        case "+":
            resultado = pNumero1 + pNumero2;
            break;
        case "-":
            resultado = pNumero1 - pNumero2;
            break;
        default:
            break;        

    }  
    
    return resultado;
}

alert(caluladora(20,200, "-"));

let numero1 = parseInt(prompt("Ingrese numero 1"));
let numero2 = parseInt(prompt("Ingrese numero 2"));
let operacion = prompt("Ingrese operacion + o -");
alert(caluladora(numero1,numero2, operacion));

// Repito 20 veces saludar
for (let index = 0; index < 20; index++) {
    saludar();  
}