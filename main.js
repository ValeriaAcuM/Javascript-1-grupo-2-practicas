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


/* 3. Dada la siguiente matriz [ [1,0,0], [0,1,1], [0,1,0] ], haga un programa que
cuente e imprima la cantidad de ceros totales en dicha matriz. Debe utilizar
ciclos for */

contador = 0;
const miArray =  [ 
  [1,0,0], 
  [0,1,1], 
  [0,1,0] 
];

for (let i = 0; i < miArray.length; i++) {
  for (let j = 0; j < miArray[i].length; j++) {
  if (miArray[i][j]==0) {
      contador++;
      }
  }
};
console.log(contador);


/* 4. Cree un programa que reciba un array de números, verifique cuáles números
están repetidos y retorne un array con dichos números (los que estan
duplicados), si no hay números repetidos en el array debe retornar el
siguiente mensaje: “No se encontraron números repetidos en la lista de
números recibida”. Debe usar un ciclo for */

numbers = [1, 2, 3, 3, 7];
  function findDuplicatedNumber(arr){
    let duplicated = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                duplicated.push(arr[i]);
            }
            else ("No hay duplicados");
        }
    }
    return duplicated;
}

let result = findDuplicatedNumber(numbers);
console.log(result);