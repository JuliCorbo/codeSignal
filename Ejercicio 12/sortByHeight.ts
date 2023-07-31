// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

function solution(a: number[]): number[] {
    let filtrarArboles: number[] = a.filter((x: number) => x !== -1).sort((a: number, b: number) => a - b); //filtro para eliminar los valores -1, y los ordeno de menor a mayor con sort
    
    for (let i: number = 0; i < a.length; i++) {
      if (a[i] !== -1) {                        // aca voy comparando los valores del array ya ordenado, y corroboro si son arboles o no.
        a[i] = filtrarArboles.shift()!;         //con el shift los reemplazo y asigno los valores del array modificado a 
      }
    }
    
    return a;
  }
  