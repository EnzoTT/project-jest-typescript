import { Cart } from "../models/Cart";
import { Mail } from "./mail";

export class Calculator{
    mail:Mail;

    constructor(mail:Mail){
        this.mail=mail;
    }
    
    itHaveShipping(value:number){
        return value < 100 && value!=0;
    }

    calculateCartValue(cart:Cart){
        var totalValue = cart.getItemsValue();
        if(this.itHaveShipping(totalValue)){
            return totalValue + this.mail.calculateShipping(cart.user.cep);
        }
        return totalValue;
    }
}