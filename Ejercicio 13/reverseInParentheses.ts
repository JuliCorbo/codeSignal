// Write a function that reverses characters in (possibly nested) parentheses in the input string.
// Input strings will always be well-formed with matching ()s.

function solution(inputString: string): string {
    while (true) {
           let c: number = inputString.indexOf(")");        //se buscan los parentesis de cierre en la primera posicion con indexOf
           
           if (c === -1) {                              //con break dejo de buscar los parentesis si no hay ninguno
               break;
           }
           
           let o: number = inputString.substring(0, c).lastIndexOf("(");        
           
           let start: string = inputString.substring(0, o);
           let middle: string = inputString.substring(o + 1, c).split("").reverse().join("");
           let end: string = inputString.substring(c + 1, inputString.length);                      //usando substrings obtengo una parte del string, en este caso lo use para dividir 
                                                                                                    //en 3 el string, start es lo que va antes del parentesis, middle es lo que va dentro
                                                                                                    //de los parentesis, a lo que aplique el metodo split, reverse, join como el que use en 
                                                                                                    // el ejercicio de verificacion de palindromo. y End para lo que va despues del parentesis
               
           inputString = start + middle + end;
       }
       
       return inputString;
   }