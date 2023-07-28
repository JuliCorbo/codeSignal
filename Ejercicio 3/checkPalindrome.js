//Given the string, check if it is a palindrome.

function solution(inputString) {
            // separe el string en caracteres con .split, despues lo di vuelta con .reverse y lo volvi a unir con .join
    return inputString == inputString.split("").reverse().join("")
  }
   