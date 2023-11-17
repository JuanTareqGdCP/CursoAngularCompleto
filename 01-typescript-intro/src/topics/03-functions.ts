

function addNumbers(a:number, b:number) {
    return a + b;
}

const addNumbersArrow = (a:number, b:number):string => {
    return `${a + b}`;
}

function multiply(firstNumber:number, secondNumber?:number, base:number = 2 ) {
    return firstNumber * base;

}

// const result:number = addNumbers(1, 2);
// const result2:string = addNumbersArrow(1, 2);
// const multiplyResult:number = multiply(5,3);
// console.log({ result, result2, multiplyResult })

interface Personaje {
    name: string;
    hp: number;
    showHp: () => void;
}

const curarPersonaje = ( personaje:Personaje, cantidad: number ) => {
    personaje.hp += cantidad;
}

const strider: Personaje = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    }
}

curarPersonaje(strider, 10);
curarPersonaje(strider, 50);

strider.showHp();
 
export {};