//Asignando valor a las variables

let nombre = "Dwight" ;
let apellido = "Schrute";
let sueldoActual = 4000 ;
let porcentajeAumento = 40 ;
let calculoAumento = (sueldoActual * porcentajeAumento) / 100;
let nuevoSueldo = sueldoActual + calculoAumento ;

//Imprimiendo mensaje en la consola 
console.log ("Hola, estimado " + nombre + " " + apellido);
console.log ("En base a tu sueldo actual: $" + sueldoActual);
console.log ("Has recibido un aumento del " +porcentajeAumento + "%, que equivale a: $" + calculoAumento);
console.log ("Y su nuevo sueldo es de: $" + nuevoSueldo + ".");


