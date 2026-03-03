//** solicitamos la temperatura en celsius  */
let celsius = parseFloat(prompt("Por favor, ingrese la temperatura en grados Celsius:"));

//** definimos la variable en Fahrenheit */
let fahrenheit = (celsius * 9 / 5) + 32;

//** mostramos el resultado de la temperatura cambiada */
console.log(celsius + " grados Celsius equivalen a " + fahrenheit + " grados Fahrenheit.");