/* 1. Cree un programa que reciba como parámetro un array de números, y
verifique la lista de manera que retorne el número mayor. */

const maxNumber = [1, 3, 80, 20, 5]
console.log(Math.max(...maxNumber));

/* 2. Cree un programa que reciba como parámetro una palabra y verifique si
dicha palabra es palíndromo, es decir, la palabra se lee igual de izquierda a
derecha o de derecha a izquierda, o no. Para la resolución de dicho problema
debe utilizar ciclo for */

function invertirCadena(cad) {
    let nuevaCadena = "";
    for (let i = cad.length - 1; i >= 0; i--) {
        nuevaCadena += cad[i];
    }
    return nuevaCadena;
}
console.log(invertirCadena('Anna'));