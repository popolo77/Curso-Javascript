// Ejercicio 1 de Funciones: ingresa un número y devuelva: si es positivo,negativo igual a cero o no es un número
// const findNumberType = (number) => {
//   let message = ""; // declarado como string vacio
//   const parsedNumber = +number; // para declararlo como int

//   if (!parsedNumber) {
//     // si es distinto de un número
//     {
//       message = "No es un número";
//       return message; // si el usuario ingresa letras el return termina la función aca mismo
//     }
//   }
//   if (parsedNumber === 0) {
//     message = "Es igual a cero";
//   } else if (parsedNumber >= 0) {
//     message = "Es positivo";
//   } else {
//     message = "Es negativo";
//   }
//   return message;
// };
// const numberIn = prompt("Ingrese un número"); // prompt está asignada a la constante numberIn para que apenas abro la app salga un modal de salida (prompt me permite interactuar con el usuario)
// const response = findNumberType(numberIn); // creo una constante (response) y le asigno la funcion creada (findNumberType()) y le asigno por argumento la constante creada para que el usuario ingrese el número (numberIn)
// alert(response); // Como no tengo que interactuar solo alertar (alert) del resultado (response) que contiene el mensaje (message) de respuesta segun el número ingresado.
//----------------------------------------------------------------
// Ejercicio 2 de Funciones: ingresa un número y devuelva si es primo

// const findNumberPrimo = (number) => {
//   let num = +number;
//   let count = 0;
//   let message = "";

//   for (let i = 2; i <= num; i++) {
//     if (num % i === 0) {
//       count++;
//     }
//   }
//   if (count === 1) {
//     message = "Es primo";
//   } else {
//     message = "No es primo";
//   }

//   return message;
// };

// const numberIn = prompt("Ingrese un número: ");
// const response = findNumberPrimo(numberIn);
// alert(response);

//----------------------------------------------------------------
// Ejercicio 3 de Funciones: Ingresar temperatura y unidad y convertir a Celsius o Farenheit según lo que quiera el usuario

const ChangeTemp = (temp, unidad) => {
  let num = +temp;
  let num2 = +unidad;
  let message = "";

  if (num2 === 1) {
    // De Farenheit a celsius
    return ((num - 32) * 5) / 9;
  } else if (num2 === 2) {
    // De celsius a Farenheit
    return (num * 9) / 5 + 32;
  }
};
console.log(ChangeTemp(33, 1));
