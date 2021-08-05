import { Cart } from ".";
import {User, Product} from "../classes"

const newCart=()=>{
    const user = new User('Enzo', '1234');
    return new Cart(user);
}

const cart = newCart();

describe("Teste do Cart",()=>{
    afterEach(()=>{cart.removeAllItems()})
    it("Calcula o valor de um carrinho vazio", ()=>{
        const cart = newCart();
        expect(cart.getItemsValue()).toBe(0);
    })

    it("Calcula o valor de um carrinho com um produto de 50", ()=>{
        const testProduct = new Product('Teste', 50);
       
        cart.addItem(testProduct, 1);

        expect(cart.getItemsValue()).toBe(50);
    })

    it("Calcula o valor de um carrinho com dois tipos produtos diferentes", ()=>{
        const testProduct = new Product('Teste', 50);
        const testProduct2 = new Product('Teste2', 25);

        cart.addItem(testProduct, 2);
        cart.addItem(testProduct2, 3);
        
        expect(cart.getItemsValue()).toBe(175);
    })

    it("Calcula a quantidade de produtos no carrinho com um produto", ()=>{
        const testProduct = new Product('Teste', 50);
        cart.addItem(testProduct,1);


        expect(cart.getTotalQuantityOfProducts()).toBe(1);
    })

    it("Calcula a quantidade de produtos no carrinho com três produtos", ()=>{
        const testProduct = new Product('Teste', 50);
        cart.addItem(testProduct,3);


        expect(cart.getTotalQuantityOfProducts()).toBe(3);
    })

    it("Calcula a quantidade de produtos no carrinho com nenhum produto", ()=>{
        expect(cart.getTotalQuantityOfProducts()).toBe(0);
    })

    it("Remove um produto de um carrinho com produtos", ()=>{
        const testProduct = new Product('Teste', 50);

        cart.addItem(testProduct,6);
        cart.removeItem(testProduct)
        expect(cart.getTotalQuantityOfProducts()).toBe(5);
        expect(cart.getItemsValue()).toBe(250);
    })

    it("Remove um produto de um carrinho vazio", ()=>{
        const testProduct = new Product('Teste', 50);

        cart.removeItem(testProduct)
        expect(cart.getTotalQuantityOfProducts()).toBe(0);
        expect(cart.getItemsValue()).toBe(0);
    })

    it("Remove todos os produtos de um carrinho", ()=>{
        const testProduct = new Product('Teste', 50);

        cart.addItem(testProduct,3);
    
        cart.removeAllItems()
        expect(cart.getTotalQuantityOfProducts()).toBe(0);
        expect(cart.getItemsValue()).toBe(0);
    })
})