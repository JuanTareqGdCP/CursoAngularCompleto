
import { Producto, taxCalculation } from './06-function-destructuring.ts';

 const shoppingCart: Producto[] = [
    {
        description: 'Nokia',
        price: 150
    },
    {
        description: 'tablet',
        price: 300
    }
 ];
 
 const [total, tax] = taxCalculation({productos: shoppingCart, tax: 0.15});


console.log('Total', total, 'Tax', tax);
