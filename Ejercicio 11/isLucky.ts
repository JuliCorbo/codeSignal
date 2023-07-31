// Ticket numbers usually consist of an even number of digits.
// A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.


function solution(n: number): boolean {
    
    const b: string[] = n.toString().split('');             //primero uso split para separar y convertir en cadena los datos del array, y divido en dos la longitud
     const y: number = b.length / 2;
     let c1: number = 0;                                    // inicio los contadores 1 y 2
     let c2: number = 0;
     
     b.map((e, i) => {
         if (i + 1 <= y) c1 += parseInt(e);    // con un map recorro el arreglo y devuelvo 2 if, sumando para c1 la primera mitad  y c2 la segunda mitad
         if (i + 1 > y) c2 += parseInt(e);
     });
     
     return c1 === c2;   //devuevlo si son estrictamente iguales
 }
 