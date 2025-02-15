/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

//comentario en una linea

// 2. Escribe un comentario en varias líneas

/*   
Comentario en 
varias
lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

// Cadenas de texto (string)
let myName = "Jesus Millan"
let alias = 'Millan1932'
let email = `millan.jesus@hotmail.com`

// Números (number)
let age = 37 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let ProbandoVerdadero = true
let ProbandoFalso = false


// 4. Imprime por consola el valor de todas las variables

console.log(myName)
console.log(age)
console.log(ProbandoVerdadero)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myName)
console.log(typeof age)
console.log(typeof ProbandoVerdadero)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
 myName = "Millan Jesus"
 console.log(myName)

 age = 35
 console.log(age)
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

 myName = "36"
 console.log(myName)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const ejercio1 = "¡Hola, JavaScript 3!"
console.log(typeof ejercio1)


const ejercio2 = 37
console.log(typeof ejercio2)

const ejercio3 = true
console.log(typeof ejercio3)

// 9. A continuación, modifica los valores de las constantes

const helloWorld3 = "¡Hola, probar cambiar valor de constante"
console.log(helloWorld3)



// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse.


// Error  ya que le estoy cambiando el valor  a la constante
 //helloWorld3 = "¡Hola de nuevo, JavaScript 2!"
 //console.log(helloWorld3)