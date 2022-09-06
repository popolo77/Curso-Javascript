// Ejercicio 1 Array : Informar por consola el numero de invitados

const list = [
  "Lucas",
  "Matias",
  "Jose",
  "Pedro",
  "Martina",
  "Marcelo",
  "Esteban",
  "Marcela",
  "Martin",
];

let count = 0;
for (let i = 0; i < list.length; i++) {
  count++;
}

console.log(`El número de invitados es ${count}`);

// Ejercicio 2 Array:  Imprimir por consola el nombre del ultimo invitado

console.log(`El ultimo invitado de la lista és: ${list[list.length - 1]}`);

console.log(list);

// Ejercicio 3 Array: A ultimo momento, se invito a Pedro a la fiesta, por lo que hay que agregarlo al final de la lista.

const updatedList = list.push("Pedro");

console.log(list);

// Ejercicio 4 Array: Media hora antes de empezar Marcela confirmo que no podia asistir.
//  Generar una nueva lista que contenga los invitados que confirmaron su
//  presencia.

const newList = list.filter((item) => item !== "Marcela");

console.log(newList);

// Ejercicio 5 Array:  Por cada invitado, asignarle un numero de orden conforme
// su posicion en la lista. Mostrar este numero de orden en un nuevo
// array de la siguiente manera: "Juan. Orden: 1"

newList.forEach((item, index) => {
  console.log(item + ". Orden: " + index);
});

// Ejercicio 6 Array: suponiendo que los invitados consumieron la siguente cantidad de platos
// Lucas: 3 platos
// Esteban: 1 platos
// Jose: 1 plato
// Los restantes: 4 platos
// Calular el numero total de platos consumidos al final de la fiesta
