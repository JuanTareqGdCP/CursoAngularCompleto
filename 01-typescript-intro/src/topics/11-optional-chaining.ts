


export interface Pasajero {
    name: string;
    children?: string[];
}

const pasajero1 : Pasajero = {
    name: 'Pepe'
}

const pasajero2 : Pasajero = {
    name: 'Jonas',
    children: ['Rodrigo','Ana']
}

const returnChildrenNumber = (pasajero : Pasajero) => {
    const howManyChildren = pasajero.children?.length || 0;

    console.log(howManyChildren);

    return howManyChildren;
}

console.log(pasajero1);

returnChildrenNumber(pasajero1);
returnChildrenNumber(pasajero2);