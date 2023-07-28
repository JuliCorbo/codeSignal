// Given an array of strings, return another array containing all of its longest strings.

function solution(inputArray) {
    const palabraMasLarga = Math.max(...inputArray.map(e=> e.length)); // con math.max y un map busco el elemento en el array con la mayor cantidad de letras y lo asigno a la constante

 
  const stringMasLargo = inputArray.filter(e => e.length === palabraMasLarga); //aca uso un filter para encontrar la palabra que sea estrictamente igual dentro del array

  return stringMasLargo;
  
 
}