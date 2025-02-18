/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valord

let myname = 3

let valorName

switch (myname) {
    case 0:
        valorName = "millan.jesus"
        break
    case 1:
        valorName = "jesus millan"
        break
    case 2:
        valorName = "jesus manuel millan bracho"
        break
    case 3:
        valorName = "JM"
        break    
    default:
        valorName = "no selecciono un nombre"
}

console.log(valorName)


// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

//Variable 
let pass = 1234

if (pass == 1234) {
    console.log("La contraseña es Correcta")
} else {
    console.log("La Contraseña es Incorrecta")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = 9

if (numero > 0){
    console.log("el numero es positivo")
} else if ( numero < 0){
    console.log("el numero es negativo")
}else {
    console.log("el numero es 0")

}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 15

if (edad >= 18){
    console.log("VOTA")
} else if ( edad <18){
    console.log(` NO VOTA faltan, ${18-edad} Años para Votar`)
}else {
    console.log(` ${edad-18}`)

}

// otro metodo para hacerlo. "METODO MAS ADECUADO"
let age = 11
const message = age >=18 ? "Vota" : ` NO VOTA faltan, ${18-age} Años para Votar`
console.log(message)


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let age2 = 18
const message2 = age2 >=18 ? "ADULTO" : "MENOR"
console.log(message2)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes1 = 7; 
let estacion;

if (mes1 >= 3 && mes1 <= 5) {
    estacion = "Primavera";
} else if (mes1 >= 6 && mes1 <= 8) {
    estacion = "Verano";
} else if (mes1 >= 9 && mes1 <= 11) {
    estacion = "Otoño";
} else if (mes1 == 12 || mes1 == 1 || mes1 == 2) {
    estacion = "Invierno";
} else {
    estacion = "Mes no válido";
}

console.log(`Nos encontramos en ${estacion}.`);
 



// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

<<<<<<< HEAD


let valordia =5
let dia
switch (valordia) {
    case 0:
        dia = "lunes"
        break
    case 1:
        dia = "martes"
        break
    case 2:
        dia = "miercoles"
        break
    case 3:
        dia = "jueves"
        break
    case 4:
        dia = "viernes"
        break
    case 5:
        dia = "sabado"
        break                                        

   default:
    dia = "Número de dia incorrecto"
}

console.log(dia)
=======
// switch///
>>>>>>> 4cc4ea4b74ec29aa7482946f15833ac19b7619ba

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let valoridioma =5
let idioma

switch (valoridioma) {
    case 0:
        idioma = "español"
        break
    case 1:
        idioma = "ingles"
        break
    case 2:
        idioma = "frances"
        break
    case 3:
        idioma = "portugues"
        break
    case 4:
        idioma = "aleman"
        break
    case 5:
        idioma = "arabe"
        break
                                         

   default:
    idioma = "seleccione un idioma"
}

console.log(idioma)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

<<<<<<< HEAD
/*
Casos agrupados: En lugar de escribir un case separado para cada mes, 
los agrupamos (por ejemplo, case 12: case 1: case 2: para invierno).

*/ 
let mesx = 1; 
let estacionx;

switch (mesx) {
    case 12: case 1: case 2:
        estacionx = "Invierno";
        break;
    case 3: case 4: case 5:
        estacionx = "Primavera";
        break;
    case 6: case 7: case 8:
        estacionx = "Verano";
        break;
    case 9: case 10: case 11:
        estacionx = "Otoño";
        break;
    default:
        estacionx = "Mes no válido";
}

console.log(`Nos encontramos en ${estacionx}.`);


// 10. Usa un switch para hacer de nuevo el ejercicio 7
=======
// 10. Usa un switch para hacer de nuevo el ejercicio 7

//Probando la subida en github
>>>>>>> 4cc4ea4b74ec29aa7482946f15833ac19b7619ba
