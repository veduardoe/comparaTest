const expect = require('chai').expect;

const enumProducts = require('./../src/enums');
const CarInsurance = require('./../src/carInsurance');
const Product = require('./../src/Product');

describe("Testing Each Product Condition", function() {

  it('Testing: ' + enumProducts.MEDIUM , function() {
    const item = new CarInsurance([new Product(enumProducts.MEDIUM, 5, 30)]);
    const products = item.updatePrice();
    expect(products[0].sellIn).equal(4);
    expect(products[0].price).equal(29);
  });

  it('Testing: ' + enumProducts.FULL , function() {
    const item = new CarInsurance([new Product(enumProducts.FULL, -2, 6)]);
    const products = item.updatePrice();
    expect(products[0].sellIn).equal(-3);
    expect(products[0].price).equal(8);
  });

  it('Testing: ' + enumProducts.LOW , function() {
    const item = new CarInsurance([new Product(enumProducts.LOW, 2, 7)]);
    const products = item.updatePrice();
    expect(products[0].sellIn).equal(1);
    expect(products[0].price).equal(6);
  });

  it('Testing: ' + enumProducts.MEGA , function() {
    const item = new CarInsurance([new Product(enumProducts.MEGA, -5, 100)]);
    const products = item.updatePrice();
    expect(products[0].sellIn).equal(-5);
    expect(products[0].price).equal(80);
  });

  it('Testing: ' + enumProducts.SPECIALFULL , function() {
    const item = new CarInsurance([new Product(enumProducts.SPECIALFULL, 10, 25)]);
    const products = item.updatePrice();
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(27);
  });

  it('Testing: ' + enumProducts.SUPERSALE , function() {
    const item = new CarInsurance([new Product(enumProducts.SUPERSALE, 2, 4)]);
    const products = item.updatePrice();
    expect(products[0].sellIn).equal(1);
    expect(products[0].price).equal(2);
  });

});

describe("Validation Data Responses", function() {

  it('CarInsurance Class -> Method updatePrice() should return the Same Number and Type of Array of Products.' , function() {
    const items = new CarInsurance([
      new Product(enumProducts.MEDIUM, 5, 30),
      new Product(enumProducts.FULL, -2, 6),
      new Product(enumProducts.LOW, 2, 7),
      new Product(enumProducts.MEGA, -5, 100),
      new Product(enumProducts.SPECIALFULL, 10, 25),
      new Product(enumProducts.SUPERSALE, 0, 3)
    ]);

    const products = items.updatePrice();

    expect(products.length).equal(items.displayProduct().length)
    expect(typeof products).equal(typeof items.displayProduct())

  });

  it('CarInsurance Class -> Method evaluateProduct() should return the Same Value when do not exist the Product.' , function() {
   
    const product = new Product('ProductNotExist', 0, 3);
    const item = new CarInsurance()
    let res = item.evaluateProduct(product);

    expect(res.name).equal('ProductNotExist')
    expect(res.sellIn).equal(0)
    expect(res.price).equal(3)

  });

  it('Product Class -> Validate Entity Product - It should have name, price and sellIn.' , function() {
   
    const product = new Product('ProductName', 0, 0);
    let fields = [];
    Object.keys(product).forEach( key => {
      fields.push(key);
    })
    fields.sort();

    expect(fields).to.eql(['name','price','sellIn']);

  });

});
