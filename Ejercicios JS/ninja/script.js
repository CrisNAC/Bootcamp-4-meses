class Ninja{
    constructor(name){
        this.name=name;
        this.salud=100;
        this.velocidad=3;
        this.fuerza=3;
    }

    sayName(){
        console.log("Nombre del ninja: "+` ${this.name}`);
    }
    
    showStats() {
        console.log(`Nombre: ${this.name} Salud: ${this.salud} Velicidad: ${this.velocidad} Fuerza: ${this.fuerza}`);
    }

    drinkSake() {
        this.salud += 10;
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

/*
// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
*/

class Sensei extends Ninja {
    constructor(nombre, salud = 200, velocidad = 10,fuerza = 10, sabiduria = 10) {
        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = sabiduria;
    }

    speakWisdom() {
        console.log("La sabiduría del sensei dice: El camino hacia la victoria no es fácil pero es inevitable");
        super.drinkSake();
    }
}

const sensei1 = new Sensei("Master Splinter", 100);
console.log(sensei1);
sensei1.speakWisdom();
console.log(sensei1);