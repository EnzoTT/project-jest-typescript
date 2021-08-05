import { Cart } from "../models/Cart";
import {User, Product} from "../models/classes"
import { Mail } from "./mail";
import {Calculator} from "./calculator"

const newCart=()=>{
    const user:User = new User('Enzo', '1234');
    return new Cart(user);
}
//mock
const client: jest.Mocked<Mail> = {
    calculateShipping: jest.fn().mockReturnValue(10),
    cep:"123"
}

//spyOn
const mail:Mail = new Mail("123");
const spyMail = jest.spyOn(mail,"calculateShipping");

const cart:Cart = newCart();
describe("Teste do Calculate",()=>{
    afterEach(()=>{cart.removeAllItems()})
    //Com mock
    it("Calcula o valor de um carrinho de valor 150 sem frete", ()=>{
        const testProduct:Product = new Product('Teste', 50);
        cart.addItem(testProduct,3);
        
        const calculator:Calculator =  new Calculator(client);
        expect(calculator.calculateCartValue(cart)).toBe(150);
    })
    
    it("Calcula o valor de um carrinho de valor 60 com frete de 10", ()=>{
        const testProduct:Product = new Product('Teste', 20);
        cart.addItem(testProduct,3);

        const calculator:Calculator =  new Calculator(client);
        expect(calculator.calculateCartValue(cart)).toBe(70);
    })

    //spyOn
    it("Calcula o valor de um carrinho de valor 100 sem frete", ()=>{
        const testProduct:Product = new Product('Teste', 20);
        cart.addItem(testProduct,5);

        spyMail.mockReturnValue(10);
        const calculator:Calculator =  new Calculator(mail);

        expect(calculator.calculateCartValue(cart)).toBe(100);
    })

    it("Calcula o valor total de um carrinho vazio", ()=>{
        
        spyMail.mockReturnValue(10);
        const calculator:Calculator =  new Calculator(mail);

        expect(calculator.calculateCartValue(cart)).toBe(0);
    })
})