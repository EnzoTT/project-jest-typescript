export class Product {
  name: string;
  value: number;

  constructor(name: string, value: number) {
    this.name = name;
    this.value = value;
  }
}

export class User {
  name: string;
  cep: string;

  constructor(name: string, cep: string) {
    this.name = name;
    this.cep = cep;
  }
}

export class Item {
    product: Product;
    quantity: number;
  
    constructor(product: Product, quantity: number) {
      this.product = product;
      this.quantity = quantity;
    }
}
