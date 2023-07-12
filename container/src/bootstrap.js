import {mount as productsMount} from 'productsApp/ProductsIndex';
import {mount as cartMount} from 'cart/CartShow'

console.log('Container!');
productsMount(document.getElementById('my-products'))
cartMount(document.getElementById('my-cart'))