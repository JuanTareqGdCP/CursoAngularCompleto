export interface Producto {
    description: string;
    price: number;

}

// const phone: Producto = {
//     description: 'Samsung',
//     price: 150
// }

// const tablet: Producto = {
//     description: 'tableta',
//     price: 300
// }

export interface TaxCalculationOptions {
    tax: number;
    productos: Producto[]
}


// function taxCalculation( options:TaxCalculationOptions ): [number, number] {
export function taxCalculation(options:TaxCalculationOptions ): [number, number] {
    
    const {tax, productos} = options;
    let total = 0;

    productos.forEach(({price}) => {
        total += price;
    });

    return [total, total * tax];
}


// const shoppingCart = [phone, tablet];
// const tax = 0.15;

// const [total, taxCalc ] = taxCalculation({
//     productos: shoppingCart,
//     tax
// });

// console.log('Total', total)
// console.log('Tax', taxCalc)