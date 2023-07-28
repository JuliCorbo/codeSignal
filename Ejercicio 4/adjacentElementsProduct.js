//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function solution(inputArray) {
 

    let maxAdy = Number.NEGATIVE_INFINITY; 

    for (let i = 0; i < inputArray.length - 1; i++) {
        // por cada iteracion multiplico el valor de la posicion actual, con el de la posicion siguiente y lo guardo en la variable product
        const product = inputArray[i] * inputArray[i + 1];
        maxAdy = Math.max(maxAdy, product); // aca usando math.max guardo el valor maximo del resultado.
    }

    return maxAdy;
}