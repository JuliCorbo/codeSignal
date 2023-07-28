// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.


function solution(sequence) {
    let contador = 0;
  
    for (let i = 1; i < sequence.length; i++) {
      if (sequence[i] <= sequence[i - 1]) {
        contador++;                           // si la posicion i es menor a la posicion anterior, guarda en contador un numero para quitar.
      }
      if (contador > 1) {
        return false;                         // si contador ya es mayor que 1, chau tu funcion
      }
      if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {       // y si la posicion i es menor o igual a la posicion de i-2 Y la posicion i+1 es menor o igual a i-1 tambien rompe la secuencia
        return false;
      }
    }
  
    return true;
  }
  