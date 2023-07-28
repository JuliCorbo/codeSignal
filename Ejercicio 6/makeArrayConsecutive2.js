// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

function solution(statues) {

  
    statues.sort((a, b) => a - b); // utilize sort para acomodar las estatuas de menor a mayor
  
    let estatuasFaltantes = 0; 
  
    
    for (let i = 0; i < statues.length - 1; i++) {
      const diferencia = statues[i + 1] - statues[i] - 1;
      estatuasFaltantes += diferencia;                      
                                                            
    }
  
    return estatuasFaltantes;
  }
  

// con un ciclo for asigne a la constante "diferencia" el valor de la operacion entre la posicion i+1 - i, dandome asi la  cantidad de estatuas faltantes entre una y otra y si o si aplicar el -1 para que no me incluya la estatua que ya tengo. despues con el operador+= le agrege el valor de la diferencia a estatuasFaltantes. 