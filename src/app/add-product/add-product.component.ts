import { Component, Output, EventEmitter } from '@angular/core';

interface Product {
  name: string;
  image: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  @Output() productAdded = new EventEmitter<Product>();
  newProduct: Product = { name: '', image: '', price: 0, description: '' };

  handleImageUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newProduct.image = e.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  addProduct() {
    const newProduct: Product = { ...this.newProduct };
    this.productAdded.emit(newProduct);
    // Clear the form
    this.newProduct = { name: '', image: '', price: 0, description: '' };
    // Show an alert
    alert('Item added');
  }
}
