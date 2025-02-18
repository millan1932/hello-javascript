/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let a = 50
let b = 100

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo "RESTO DE LA DIVISION"
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

//b-- // Decremento
//console.log(b)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

   let operaciondeasignacion = b
   console.log(operaciondeasignacion)
   operaciondeasignacion += 2 //102 ya que b=100 + 2 del valor de la variable
   console.log(operaciondeasignacion)

//    operaciondeasignacion -= a // Resta con asignación
//    operaciondeasignacion *= a // Multiplicación con asignación
//    operaciondeasignacion /= a // División con asignación
//    operaciondeasignacion %= a // Módulo con asignación
    operaciondeasignacion **= b // Exponente con asignación
   console.log(operaciondeasignacion)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let operacionverdadera = 5000
let operacionfalsa = 600
console.log(operacionverdadera > operacionfalsa) // Mayor que
console.log(operacionverdadera >= operacionfalsa) 
console.log(operacionverdadera == operacionverdadera) 
console.log(0 == false)
console.log(operacionverdadera !== "465465")

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

let operacionverdadera2 = 5000
let operacionfalsa2 = 600
console.log(operacionverdadera2 < operacionfalsa2)
console.log(operacionverdadera2 <= operacionfalsa2)
console.log(operacionverdadera2 == operacionfalsa2)
console.log(operacionverdadera2 === "6")
console.log(operacionverdadera2 === null)

// 5. Utiliza el operador lógico and
console.log(operacionverdadera > operacionfalsa && operacionverdadera2 < operacionfalsa2) 
// Al no complirse una de las condiciones el resultado es false

// 6. Utiliza el operador lógico or

console.log(operacionverdadera > operacionfalsa || operacionverdadera2 < operacionfalsa2) 
// si alguna de las condiciones se cumple es true

// 7. Combina ambos operadores lógicos
console.log(operacionverdadera > operacionfalsa &&  operacionverdadera2 < operacionfalsa2 || 10 <9)
// al combinar los operadores logicos, si se cumple alguna de la condicion el resultado es true

// 8. Añade alguna negación
console.log(!(5 > 10 && 15 > 20))
// 5 > 10 NO "false", y 15 > 20 NO "false", pero el signo ! niega la operacion por lo tanto es true


// 9. Utiliza el operador ternario

const hagouber = true
hagouber ? console.log("Que ladilla") : console.log("si voy")

// 10. Combina operadores aritméticos, de comparáción y lógicas
 let sumar = 10
 let restar = 15

 console.log(restar-sumar > sumar || sumar > 1 )


 