import { Component, Input } from '@angular/core';

interface Product {
  name: string;
  image: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() product!: Product;
}