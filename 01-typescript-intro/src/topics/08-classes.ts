

export class Persona {
    // public name: string;
    // public address: string;

    // constructor(nombre: string, direccion: string) {
    //     this.name = nombre;
    //     this.address = direccion;
    // }

    constructor(
        public name: string,
        public lastName: string,
        private address: string = 'Sin dirección'
    ) {}
}

// export class Heroe extends Persona {

//     constructor(public name: string,
//          address: string,
//          public alterName: string,
//          public age: number) {
//         super(name, address)
//     }
// }

export class Heroe {
    constructor(public persona: Persona,
         public alterName: string,
         public age: number
    ) {
        this.persona = person;
    }
}

const person = new Persona('Tony', 'Stark', 'New York');
const ironman = new Heroe(person, 'IronMan', 40);

console.log(ironman)