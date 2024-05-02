import { Component } from '@angular/core';

interface Product {
  name: string;
  image: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: Product[] = [
    // {
    //   name: 'Product 1',
    //   image: 'assets/images/product1.jpg',
    //   price: 100,
    //   description: 'This is product 1',
    // },
    {
      name: 'Laptop Backpack',
      price: 109.95,
      description: 'A cool laptop backpack',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      name: 'Casual T-Shirt for Men',
      price: 22.3,
      description: 'Slim-fitting style, t-shoty for men',
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    },
    {
      name: 'Mens Cotton Jacket',
      price: 55.99,
      description: 'Great outerwear jackets for spring, autumn, or winter.',
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
    {
      name: 'Mens Casual Slim Fit',
      price: 15.99,
      description: 'An aweome shirt for men',
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    },
    {
      name: "Women's Gold & Silver Bracelet",
      price: 695,
      description: 'A very cool bracelet.',
      image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    },
    {
      name: 'Solid Gold Petite Micropave',
      price: 168,
      description: 'A very cool jewlery for women',
      image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    },
    {
      name: 'White Gold Plated Princess',
      price: 9.99,
      description: 'A great diamond engagement ring for her.',
      image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    },
    {
      name: 'Gold-plated Earrings',
      price: 10.99,
      description: 'Rose Gold Plated Double Flared Tunnel Plug Earrings.',
      image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    },
    // Add more products here
  ];
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
}
