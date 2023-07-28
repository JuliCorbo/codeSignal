// After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).



function solution(matrix) {
    for(let i = 0; i < matrix.length; i++) {
      for(let x = 0; x < matrix[0].length; x++){        // se usan dos for para acceder a los elementos de un arreglo bidimensional, uno lo recorre a por longitud y otro por columnas
        if (matrix[i][x] === 0 && i < matrix.length - 1) { // aca se corrobora si los valores en cada posicion son = 0 ,
          matrix[i + 1][x] = 0;                            // se le asigna el valor 0 a los elementos que estan debajo de ellos tambien.
        }
      }
    }
  
    return matrix.reduce((prev, current) => {
      current.forEach(el => {
        prev += el                                  // una vez modificado el array uso un reduce para sumar los elementos
      })
  
      return prev
    }, 0)
  }