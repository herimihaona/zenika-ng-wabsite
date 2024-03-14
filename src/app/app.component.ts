import { Component } from '@angular/core';
import { Product } from './product/product.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  total = 0;
  title = 'my first component';
  products: Product[] = [
    {
      "id": "welsch",
      "title": "Coding the welsch",
      "description": "Tee-shirt col rond - Homme",
      "photo": "/assets/coding-the-welsch.jpg",
      "price": 20,
      "stock": 0
    },
    {
      "id": "world",
      "title": "Coding the world",
      "description": "Tee-shirt col rond - Homme",
      "photo": "/assets/coding-the-world.jpg",
      "price": 18,
      "stock": 0
    },
    {
      "id": "vador",
      "title": "Duck Vador",
      "description": "Tee-shirt col rond - Femme",
      "photo": "/assets/coding-the-stars.jpg",
      "price": 21,
      "stock": 0
    },
    {
      "id": "snow",
      "title": "Coding the snow",
      "description": "Tee-shirt col rond - Femme",
      "photo": "/assets/coding-the-snow.jpg",
      "price": 19,
      "stock": 0
    }
  ];

  addToBasket(product:Product) { 
    this.total += product.price;
  }

  get hasProductsInStock(): boolean {
    return this.products.some(product => product.stock > 0);
  }
}
