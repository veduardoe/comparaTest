const enumProducts = require('./enums');

class Product {

    constructor(name, sellIn, price) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }

}

class CarInsurance {

    constructor(products = []) {
        this.products = products;
    }

    updatePrice() {
        for (let product of this.products) {
            product = this.evaluateProduct(product);
        }

        return this.products;
    }

    evaluateProduct(product) {

        switch (product.name) {

            case enumProducts.MEDIUM:
            case enumProducts.LOW:

                product.price = (product.sellIn < 0) ? product.price - 2 : product.price - 1;

                break;

            case enumProducts.FULL:

                product.price = (product.sellIn < 0) ? product.price + 2 : product.price + 1;

                break;

            case enumProducts.MEGA:

                product.price = 80;

                break;

            case enumProducts.SPECIALFULL:

                if(product.sellIn < 0){
                    product.price = 0;
                }else if(product.sellIn <= 5){
                    product.price = product.price + 3;
                }else if(product.sellIn <= 10){
                    product.price = product.price + 2;
                }else{
                    product.price++;
                }

                break;

            case enumProducts.SUPERSALE:

                product.price = (product.sellIn < 0) ? product.price - 4 : product.price - 2;

                break;

            default:

                /** Do something extra if there's no coincidence */

                break;

        }

        if (product.name != enumProducts.MEGA) {

            product.price = (product.price < 0) ? 0 : ((product.price > 50) ? 50 : product.price);
            product.sellIn--;

        }

        return product;

    }
}

module.exports = {
    Product,
    CarInsurance
}
