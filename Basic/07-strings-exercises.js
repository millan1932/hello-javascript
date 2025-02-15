/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let minombre = "Millan"
let apellido = "Jesus"

console.log(minombre+ apellido)

// 2. Muestra la longitud de una cadena de texto

console.log(minombre.length)

// 3. Muestra el primer y último carácter de un string
console.log("El primer Caracter es ="  + minombre[0])
console.log("El ultimo Caracter es ="  + minombre[5])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(minombre.toLocaleLowerCase()) //minuscula
console.log(minombre.toUpperCase()) // Mayusculas

// 5. Crea una cadena de texto en varias líneas

let variaslineas = `
variable 
en
varias
lineas
`
console.log(variaslineas)

// 6. Interpola el valor de una variable en un string
console.log(`Mi nombre es ${apellido} y mi apellido es ${minombre}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

const texto = "mi nombre es jesus millan";
const textoModificado = texto.replace(/\s+/g, "-");
console.log(textoModificado);
/* 
Explicación:
\s+ → Coincide con cualquier espacio en blanco (incluye espacios, tabulaciones y saltos de línea).
g → Modificador global, para reemplazar todas las apariciones.
*/



// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(minombre.includes("Millajn"))

// 9. Comprueba si dos strings son iguales

const variable1 = "Hola";
const variable2 = "Hola";

//Metodo 1
console.log(variable1 === variable2)

//Metodo 2 
if (variable1 === variable2) {
    console.log("Los strings son iguales");
} else {
    console.log("Los strings son diferentes");
}

// 10. Comprueba si dos strings tienen la misma longitud

//metodo 1
console.log(minombre.length === apellido.length)

//metodo 2

if (minombre.length === apellido.length)
{
  console.log("tienen la misma longitud")
}
else
{
    console.log("No tienen la misma longitud")
}