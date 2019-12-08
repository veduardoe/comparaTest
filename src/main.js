const Product = require('./product');
const CarInsurance = require('./carInsurance');
const enumProducts = require('./enums');

let listOfProducts = [
    new Product(enumProducts.MEDIUM, 10, 20),
    new Product(enumProducts.FULL, 2, 0),
    new Product(enumProducts.LOW, 5, 7),
    new Product(enumProducts.MEGA, 0, 80),
    new Product(enumProducts.MEGA, -1, 80),
    new Product(enumProducts.SPECIALFULL, 15, 20),
    new Product(enumProducts.SPECIALFULL, 10, 49),
    new Product(enumProducts.SPECIALFULL, 5, 49),
    new Product(enumProducts.SUPERSALE, 3, 6),
];

const carInsurance = new CarInsurance(listOfProducts);

const productPrinter = function (product) {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
  };
  
  for (let i = 0; i <= 30; i += 1) {
    console.log(`Day ${i}`);
    console.log('name, sellIn, price');
    if(i > 0){
        carInsurance.updatePrice().forEach(productPrinter);
    }else{
        carInsurance.displayProduct().forEach(productPrinter);
    }
    console.log('');
  }