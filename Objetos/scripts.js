//EJERCICIOS

/*
1) Crear una clase Deportes, que reciba el atributo nombre
y un metodo que permita mostrar por consola ese nombre.
Ademas, crear un metodo que permita mostrar si el deporte es
individual o por equipos.
Crear una subclase que sea DeportesDeEquipo que permita ademas del nombre, 
el numero de integrantes que deben formar parte de ese equipo. 
Crear un metodo para
mostrar el siguiente mensaje: 
"Para jugar al futbol necesitas 11 jugadores por equipo".
 Tener en cuenta que 'futbol' y 11 son valores que 
 pueden variar dependiedo
 del deporte (por ejemplo, si fuese basket, seria 5 jugadores)
 Futbol
 Basket
 Tenis
PARA ESTA ACTIVIDAD, USAR LO VISTO RESPECTO DE CLASES Y OBJETOS
*/

// class Deportes {
//   constructor(name) {
//     this.name = name;
//   }
//   sayName() {
//     console.log(`El nombre del deporte es ${this.name}`);
//   }
// }
class Sport {
  constructor(name, isTeamSport) {
    this.name = name;
    this.isTeamSport = isTeamSport;
  }

  sayName() {
    console.log(`El nombre del deporte es ${this.name}`);
  }

  sayIsTeamSport() {
    const message = this.isTeamSport
      ? `${this.name} es un deporte de equipo`
      : `${this.name} no es un deporte de equipo`;

    console.log(message);
  }
}

const futbol = new Sport("Futbol", true);
const tenis = new Sport("Tenis", false);
const basket = new Sport("Basket", true);

futbol.sayName();
futbol.sayIsTeamSport();

tenis.sayName();
tenis.sayIsTeamSport();

basket.sayName();
basket.sayIsTeamSport();
