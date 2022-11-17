// PRACTICA DE RECURSIVIDAD 

/* 1. Escribe un programa que invierta una cadena usando recursión. Dada la cadena "freeCodeCamp", 
el programa debería devolver "pmaCedoCeerf". */

 /* const invertirWord = invertirCadena("freeCodeCamp")

function invertirCadena (str) {
  if (str === "") {
    return "";
  } else {
    return invertirCadena(str.substr(1)) + str.charAt(0); // str.substr(1)agarra letra en la posicion 1(r) y str.charAt(0) agarra posicion 0 (f)
  }
}

console.log (invertirWord); */




/* 2. Escribe un programa que devuelva el número de veces que aparece una letra en una cadena. 
Tu programa debería recibir una cadena y la letra. */

/* let palabra = prompt ("Digite una palabra")
let letra = prompt ("Digite la letra")

function numLetra (palabra, letra) {
  if (palabra.length === 0) {
      return "";  //ARREGLAR AQUÍ
  } else {
      return numLetra(palabra.slice(1), letra);
  }
}
console.log(numLetra(letra)) */




/* 3. Escriba un programa que reciba una frase y este debe de intercambiar 
las vocales por la ‘i’. Ej, “esta es la entrada” → “isti is li intridi” */
 
/* let frase = prompt("Digite la frase")

 function changeVowel (frase) {
  if (frase.length === 0) {
    return "";
  }

  if (frase[0] === "a" || frase[0] === "e" || frase[0] === "o" || frase[0] === "u") {
    return "i" + changeVowel(frase.slice(1));
  }
  return frase[0] + changeVowel(frase.slice(1)); //slice copia los valores en el nuevo array, original y el nuevo, referencian al mismo objeto
};

console.log (changeVowel(frase)); */




/* 4. Escriba un programa que reciba una palabra y reordene sus letras en orden alfabético. Ej. hola → ahlo */

/* let palabra = prompt("Digite una palabra")

function reordenarLetras (palabra) {
  return [...palabra].sort((a, b) => a.localeCompare(b)).join(''); 
}
console.log(reordenarLetras(palabra)); */