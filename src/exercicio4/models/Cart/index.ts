import { User, Item, Product } from "../classes";

export class Cart {
  items: Item[];
  user: User;

  constructor(user: User) {
    this.items = [];
    this.user = user;
  }

  addItem(product:Product, quantity:number):void{
    const index = this.items.findIndex((item)=>item.product.name === product.name);

    if(index!==-1){
      this.items[index].quantity += quantity;
      return;
    }

    this.items.push(new Item(product, quantity));
    return;
  }

  removeItem(product:Product):void{
    const index = this.items.findIndex((item)=>item.product.name === product.name);

    if(index!==-1){
      if(this.items[index].quantity === 1)
      {
        this.items.slice(index, 1);
        return;
      }
      this.items[index].quantity -= 1;
      return;
    }

    return;
  }

  removeAllItems():void{
    this.items=[]
    return;
  }


  getItemsValue(): number {
    var result: number = 0;

    result = this.items.reduce(
      (totalValue: number, item: Item) =>
        totalValue + item.quantity * item.product.value,
      0
    );

    return result;
  }

  //Para o teste de add e remove
  getTotalQuantityOfProducts(){
    var result:number = 0;

    result = this.items.reduce(
      (total:number, item:Item)=>
      total + item.quantity, 0
    );

    return result;
  }
}
