// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.


function solution(a: number[]): number[] {
    let resultado: number[] = [0, 0];
       for (let i = 0; i < a.length; i++) {
           if (i % 2 === 0) {                      // determino con un if la posicion del elemento para asignar a equipo 1 o equipo 2 , usando i % 2 === 0 determino si la posicion es 
                                                   // numero par 
               resultado[0] += a[i];               //si es par le sumo el valor a la variable resultado en la posicion 0
           } else {
               resultado[1] += a[i];                 //si es impar le sumo el valor a la variable resultado en la posicion 1
           }
       }
       return resultado;
   }
   
   