// Debemos hacer una preparacion en base a la fruta que nos den
// Si es naranja: preparar un jugo
// Si es una manzana: hacer un pure
// si es una banana: servir en rodajas
 
function prepararFruta(fruta) {
    let respuesta
    switch (fruta) {
        case 'naranja':
            respuesta = 'Prepara jugo de naranja.'
            break
        case 'manzana':
            respuesta = 'Hacer pure de manzana.'
            break
        case 'banana':
            respuesta = 'Cortar en roodajas y servir'
            break
        default:
            respuesta = 'Esta fruta no se puede preparar.'
            break
    }
    return respuesta
}
 
console.log(prepararFruta("banana"));
console.log(prepararFruta(`naranja`));
console.log(prepararFruta('manzana'));