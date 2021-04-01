// Funciones

function calculoPotencia(pNumero) {

    let resultado = 1;

    for (let index = 0; index < pNumero; index++) {
        resultado = resultado * 2;       
    }
    return resultado; 
}
console.log(calculoPotencia(10));
console.log(calculoPotencia(20));
console.log(calculoPotencia(45));

