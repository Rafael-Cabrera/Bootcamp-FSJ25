function fMultiplosDeTres(arr) {
    //Verificar que el arreglo tenga datos
    if (arr.length <= 1) {
        return arr;
    }

    const aResult = []; // Inicializa el array resultante
    let sum = 0; //Guarda la suma cada número
    let num = 0; //Tomara el número en el índice del arreglo.
    let limite = 100; //Límite de la sumatoria.

    // Recorre el array
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        // Verificar si el número es mutiplo de 3
        if ((num => num % 3 === 0) && num > 1) {
            // Verificar si añadir el número a la suma no excede el límite de 100
            if (sum + num < limite) {
                aResult.push(num);
                sum += num;
            } else {
                // Si la suma excede el límite, termina el bucle
                break;
            }
        }
    }

    return aResult;
}

// Ejemplo de uso:
const numArray = [1, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33];
const resultadoArray = fMultiplosDeTres(numArray);
console.log('Array resultante:');
console.log(resultadoArray);  // Salida: [3, 6, 9, 12, 15, 18, 21] el 24 y otros ya no se agrega porque supera el límite de 100.


