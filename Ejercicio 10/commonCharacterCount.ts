// Given two strings, find the number of common characters between them.

function solution(s1: string, s2: string): number {

    let cantidad: number = 0;

    const stringUno: string[] = s1.split("");    // con un split separamos los caracteres de los arrays
    const stringDos: string[] = s2.split("");


    for (let i = 0; i < stringUno.length; i++) {         //con un for iteramos sobre sobre los dos strings usando idexof para comparar las posiciones buscando coincidencias                                                                                                                                                                                                                                        
        const index: number = stringDos.indexOf(stringUno[i]);
        if (index !== -1) {
            stringDos.splice(index, 1);             // si encuentra la coincidencia => elimino con splice para evitar repetirla
            cantidad += 1;
        }
    }

    return cantidad;
}
