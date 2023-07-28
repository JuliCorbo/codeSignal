//Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
//A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the
// n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

function solution(n) {
    let area = 1
    for(let i=1; i<=n;i++){
        const x = (4*i)-4
        area+= x
    }
    return area
  }
  
  //para esta funcion, use el calculo x= (4*i) -4 iterando sobre n, llegando al calculo de para el valor de i=2, 4*2 = 8 -4 + area = 5.
  //el mismo calculo de i=3, 4*3 = 12 -4 +area(en este caso asignado el valor del bucle anterior) da como resultado 13.
  //sisi se que me la complique jaja