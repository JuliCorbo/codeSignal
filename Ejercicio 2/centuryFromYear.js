// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second
//  - from the year 101 up to and including the year 200, etc.

function solution(year) {
    century = 0
    while ( year >0 ){
        //por cada 100 años que se resten hasta llegar a 0 , se incrementa en uno el valor century 
        year -= 100;
        century +=1
    }
        
    
    return century
}


